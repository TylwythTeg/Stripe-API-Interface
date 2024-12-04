import { templates } from './templates.js';
import { apiResources } from './api_resources.js';






function searchTemplatesByName(name) {
        var keys = Object.keys(templates);
    var val;
    
    keys.forEach( key => {
            var resource = templates[key];
        var templateNames = Object.keys(resource);
      
        val = val || resource[templateNames.find(templateName => {
                return templateName === name;
        })];
    });
    

    return val;

}

window.onload = function() {
        runApiInterface();
};

var templateWrap = document.getElementById("temp-wrapper");

function runApiInterface() {
  
  (function setUpTextInputEventListeners() {
        var inputs = document.getElementsByClassName("user_input_prompt");
        for (var i = 0; i< inputs.length; i++) {
            var input = inputs[i];
          
          input.addEventListener("focus", objPromptFocusListener);
          input.addEventListener("blur", objPromptBlurListener);
      }
  })();
  
  /* obj prompt. Adds shadow on parent container */
  function objPromptFocusListener(event) {
      event.target.parentElement.classList.add("focused");
  }

  function objPromptBlurListener(event) {
      event.target.parentElement.classList.remove("focused");
  }
  /* obj prompt. Adds shadow on parent container */

  /* Show / Hide Connect Account ID Input */
  var checkbox = document.getElementById("connect_auth");
  var connectContainer = document.getElementById("connect_container");
  checkbox.addEventListener("change", function(event) {
      var toggle = checkbox.checked ? "add" : "remove";
      connectContainer.classList[toggle]("visible");
  });
  /* Show / Hide Connect Account ID Input */

  function authAs() {
      return checkbox.checked;
  }

  /* Object or Endpoing Selection */
  var apiObjects = document.getElementById("api_object_selection");
  var apiMethods = document.getElementById("api_method_selection");
  var requestData = document.getElementById("JSON_request");
  var requestContainer = document.getElementById("request_container");
  var docLink = document.getElementById("doc_link");
  apiObjects.addEventListener("change", function(event) {
      apiMethods.innerHTML = "";
      var selection = event.target.value;
      var resource = Object.keys(apiResources[selection]);
      
      // unset auth_as by default
      checkbox.checked = false;
      checkbox.dispatchEvent(new Event('change'));

      populateMethodSelection(apiResources[selection], resource);
      updateEndpointContainer(endpointContainer, apiObjects.value, apiMethods.value);
      updateRequestArea(requestContainer, apiObjects.value, apiMethods.value);
      updateLink(docLink, apiObjects.value, apiMethods.value);
      updateTemplateSelection();
      setRelevantTemplateOptions();
  });


  var uploadContainer = document.getElementById("upload-container");

  function updateRequestArea(textArea, apiObject, apiMethod) {
      var resource = apiResources[apiObject][apiMethod];
      
      /* Show / Hide JSON Request Area */
      var toggle = resource.params ? "remove" : "add";
      textArea.classList[toggle]("removed");

      /* Clear the request data */
      requestData.value = "{\n\n\n\n\n\n\n\n\n\n}";
      //console.log("We should have cleared the data there");

      /* Show / Hide File Upload */
      var toggle = resource.file_upload ? "add" : "remove";
      uploadContainer.classList[toggle]("show");

  }


  function populateMethodSelection(apiObj, resource) {
      for (var method in resource) {
          var opt = document.createElement("option");
          opt.value = resource[method];
          opt.innerHTML = resource[method];
          opt.innerHTML = apiObj[resource[method]].name;
          apiMethods.appendChild(opt);
      }
  }

  function updateLink(linkElement, apiObj, apiMethod) {
      var resource = apiResources[apiObj][apiMethod];

      linkElement.href = resource.doc_link;
      linkElement.textContent = resource.doc_link;
      linkElement.setAttribute("target", "_blank");
  }
  
  function setRelevantTemplateOptions () {
  
  var templates2 = templates[apiObjects.value];
      //if (!templates2) {return;}
  
  var relevant = false;
      Object.keys(templates2).forEach(function(template) {
        if (templates2[template].method === apiMethods.value){
          relevant =  true;
        }
      });
    var relevantOptions = [];
       
       
      [...templateSelections2.children].forEach((option, index) => {
          var template = searchTemplatesByName(option.value);
        if (template.method === apiMethods.value) {
                option.disabled = false;
            relevantOptions.push(option);
        }else {
            option.disabled = true;
        }
      });
      
      // select first relevant option
      if (relevantOptions.length > 0) {
            relevantOptions[0].selected = true;
      }

      
      if (relevant) {
        templateWrap.classList.add("visible");
      } else{
        templateWrap.classList.remove("visible");
        return;
      }
  }

  const endpointContainer = document.getElementById("endpoint-container");
  apiMethods.addEventListener("change", function(event) {
      updateEndpointContainer(endpointContainer, apiObjects.value, apiMethods.value);
      updateRequestArea(requestContainer, apiObjects.value, apiMethods.value);
      updateLink(docLink, apiObjects.value, apiMethods.value);
      
      // uncheck auth_as by default
      checkbox.checked = false;
      checkbox.dispatchEvent(new Event('change'));
      
      //make sure we have templates for that
      var templates2 = templates[apiObjects.value];
      if (!templates2) {return;}
      
      console.log("templates2");
      console.log(templates2);
      
      // check if any apply
      var met = apiMethods.value;
      var names = Object.keys(templates2).filter(name => {
          var t = templates2[name];
                return t.method === met;
      });
      
      if (!names || names.length <= 0) {
        templateWrap.classList.remove("visible");
        return;
      }
      
      
      

      var relevant = false;
      Object.keys(templates2).forEach(function(template) {
        if (templates2[template].method === apiMethods.value){
          relevant =  true;
        }
      });
      
      // filter them NEW!
       setRelevantTemplateOptions();
      
      //change
       var dict = templates[apiObjects.value];
      var template = dict[templateSelections2.value];
      
      if (!template) {
        requestData.value = "{\n\n\n\n\n\n}";
        return;
      }
      
      //console.log("template");
      //console.log(template);

      /* Make presets happen */
      checkbox.checked = template.auth_as ? true : false;
      checkbox.dispatchEvent(new Event('change'));

      //apiObjects.value = templateSelections.value;
      //apiObjects.dispatchEvent(new Event('change'));

      //apiMethods.value = template.method;
      //apiMethods.dispatchEvent(new Event('change'));
            console.log("Did we get this far?");
      var val = JSON.parse(template.data);
      val = JSON.stringify(val, null, 3);
      requestData.value = val;
      
      
      /* Set endpoint parameters */
      /* Right now only exists for the Country Spec Template */
      if (template.setEndpointParams) {
            var prompts = document.getElementsByClassName("object_id_input");
            for (var i = 0; i < prompts.length; i++) {
                var prompt = prompts[i];
              var attr = prompt.getAttribute("placeholder");
              
              if (Object.keys(template.setEndpointParams).includes(attr)) {
                    prompt.value = template.setEndpointParams[attr];
              }
          }
      }
     
  });

  function updateEndpointContainer(container, resource, method) {
      var wrapper = document.getElementById("endpoint-wrapper");
      var paramContainer = document.getElementById("endpoint-header-container");
      
      wrapper.innerHTML = '';
      var url = apiResources[resource][method].endpoint;
      //alert(url);
      var components = url.split("/");

            addComponents(wrapper,components);
      
      var toggle = requiredComponents(components) ? "add" : "remove";
      paramContainer.classList[toggle]("visible");

  }


  function isResource(str) {
      return Object.keys(apiResources).includes(str);
  }

  function isRequiredInfo(str) {
      return str.includes("{");
  }
  
  function requiredComponents(components) {
        for (var i in components) {
            var component = components[i];
          if (isRequiredInfo(component)) {
                return true;
          }
      }
      return false;
  }
  
  function addComponents(container,components) {
        for (var i in components) {
            var component = components[i];
          if (!isRequiredInfo(component)) {
                continue;
          }
          
          var inputContainer = document.createElement("div");
          inputContainer.classList.add("input_container");
          inputContainer.classList.add("user_input_prompt_container");
          inputContainer.classList.add("endpoint_param");
          container.appendChild(inputContainer);

          var newInput = document.createElement("input");
          newInput.setAttribute("type", "text");
          newInput.setAttribute("placeholder", component);
          newInput.classList.add("search_bar");
          newInput.classList.add("object_id_input");
          newInput.classList.add("user_input_prompt");


          newInput.addEventListener('focus', objPromptFocusListener);
          newInput.addEventListener('blur', objPromptBlurListener);
          inputContainer.appendChild(newInput);
      }
  }


  /* User submission and API call */
  var submitButton = document.getElementById("calculateButton");
  var resContainer = document.getElementById("results-container");
  var resultLabel = document.getElementById("label-results");
  var apiBar = document.getElementById("api_key_input");
  submitButton.addEventListener("click", function(event) {
      var apiKey = apiBar.value;

      // Clear Response
      $('#upload-results').text("");

      if (!validTestKey(apiBar.value)) {
          updateResults("Failure", null, "Please enter a valid test API key");
          return;
      }
      

      var selectedResource = apiObjects.value;
      var selectedMethod = apiMethods.value;


      var met = apiResources[apiObjects.value][apiMethods.value];
      var type = apiResources[apiObjects.value][apiMethods.value].type;
      var request = requestData.value;


      /* Send empty JSON if no JSON is needed */
      /* Or, send what's in the text area */
      var text = met.params ? requestData.value : "{}";
      
      updateResults("Pending", "Checking JSON...", null);

      try {
        var requestObj = getRequestData(met, text);
        var data = requestObj.data;
        var logObject = requestObj.log;
      }
      catch (error) {
          updateResults("Failure", "Failure: Invalid Request Data", error);
          return;
      }
      

      var url = buildEndpoint();
      var headers = getHeaders();

      updateResults("Pending", "Awaiting Response...", null);

      $.ajax({
          url: url,
          data: data,
          headers: headers,
          type: type,
          cache: met.file_upload ? false : true,
          contentType: met.file_upload ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
          processData: met.file_upload ? false : true,
      }).done(function(data) {
          updateResults("Success", null, JSON.stringify(data, null, 3));

          addHistory({
              resource: selectedResource,
              method: selectedMethod,
              endpoint: url,
              request: logObject,
              headers: headers,
              response: JSON.stringify(data, null, 3)
          });


      }).fail(function(response, type, message) {   
          updateResults("Failure", null, JSON.stringify(response.responseJSON, null, 3));

          addHistory({
              resource: selectedResource,
              method: selectedMethod,
              endpoint: url,
              request: logObject,
              headers: headers,
              response: JSON.stringify(response.responseJSON, null, 3),
              error: true
          });
      });




  });
  
  function getRequestData(met, text) {
        /* Parse JSON or throw error */
        /* If no JSON required, will just parse '{}' */
        var data = JSON.parse(text);
        var logData = data;

        /* File upload quirk */
        /* needs to be Form-data rather than url-encode */
        if (met.file_upload) {
          var filename = fileBox.value.replace(/([^\\]*\\)*/, '');
          var logData = {
            "multipart/form-data": {
            }
          };

          if (filename) {
            logData["multipart/form-data"].file = filename;
          }

          var oldData = data;
          var data = new FormData();
          data.append("file", $('#file-box')[0].files[0]);
          
          if (oldData.purpose) {
              data.append('purpose', oldData.purpose);
              logData["multipart/form-data"]["purpose"] = oldData.purpose;
          }
        }
        
        return {
          data: data,
          log: logData
        };
    }
  
  function updateResults(status, labelText, message) {
            /* clear classes */
          resultLabel.className = "";
          
          if (status === "Success") {
                var text = "Success!";
              var newClass = "success";
          } else if (status === "Failure") {
                var text = "Failure";
              var newClass = "failure";
          } else if (status === "Pending") {
                var text ="Pending";
              var newClass = "processing-request";
          }
          
          var labelText = labelText || text;
          var message = message || "";
          
          
          $('#label-results').text(labelText);
          $('#label-results').addClass(newClass);
          $('#upload-results').text(message);
          
          /* Make sure results are visible */
          resContainer.classList.add("show");
          
      }
  
  
  var connectBar = document.getElementById("connect_input");
  function getHeaders() {
        var apiKey = apiBar.value;
        if (authAs()) {
          var headers = {
              'Authorization': 'Bearer ' + apiKey,
              'Stripe-Account': connectBar.value,
          };
      } else {
          var headers = {
              'Authorization': 'Bearer ' + apiKey,
          }
      }
      
      return headers;
  }


  var historyContainer = document.getElementById("history-tab");

  function addHistory(params) {
      var elem = document.createElement("li");
      elem.classList.add("history_item");
      //elem.textContent = params.resource + "." + params.method;

      var title = document.createElement("h2");
      title.classList.add("history_item_clickable");
      title.textContent = params.resource + "." + params.method;
      elem.appendChild(title);

      if (params.error) {
          title.classList.add("api_error");
      }


      var child = document.createElement("div");
      child.classList.add("history_item_info");

      var endp = document.createElement("pre");
      var endp_label = document.createElement("h3");
      endp_label.textContent = "Endpoint";
      endp.textContent = params.endpoint;


      var headers_label = document.createElement("h3");
      var headers = document.createElement("pre");
      headers_label.textContent = "Headers"
      headers.textContent = JSON.stringify(params.headers, null, 3);

      var request_label = document.createElement("h3");
      var request_data = document.createElement("pre");
      request_label.textContent = "Request";
      request_data.textContent = JSON.stringify(params.request, null, 3);

      var response_label = document.createElement("h3");
      var response_data = document.createElement("pre");
      response_label.textContent = "Response";
      response_data.textContent = params.response;



      elem.appendChild(child);
      child.appendChild(endp_label);
      child.appendChild(endp);
      child.appendChild(headers_label);
      child.appendChild(headers);
      child.appendChild(request_label);
      child.appendChild(request_data);
      child.appendChild(response_label);
      child.appendChild(response_data);


      insertAtTop(historyContainer, elem);
      limit(historyContainer, 30);
      
      function insertAtTop(container, item) {
            if (container.firstChild) {
                container.insertBefore(item, container.firstChild);
          } else {
                container.appendChild(item);
          }
      }
      
      function limit(container, amount) {
            var lastChild = container.lastChild;
          var amount = amount - 1;
          if (container.children.length > amount) {
                container.removeChild(lastChild);
          }
      }

  }

  /* refs endpointContainer */
  function buildEndpoint() {

      var resource = apiResources[apiObjects.value][apiMethods.value];
      var newEndpoint = resource.endpoint;

      var inputs = document.getElementsByClassName("object_id_input");

      for (var i = 0; i < inputs.length; i++) {
          var input = inputs[i];
          var objPrompt = input.getAttribute("placeholder");
          var value = input.value.replace(" ", "");
          newEndpoint = newEndpoint.replace(objPrompt, value);
      }
      return "https://" + newEndpoint;


  }

  /* Enable 'tabbing' in request data area */
  /* Really just 3 spaces */
  requestData.addEventListener("keydown", function(event) {
      if (event.which === 9) {
          var cIndex = this.selectionStart;
          this.value = [this.value.slice(0, cIndex), //Slice at cursor index
              "   ", //Add Tab
              this.value.slice(cIndex)
          ].join(''); //Join with the end
          event.stopPropagation();
          event.preventDefault(); //Don't quit the area
          this.selectionStart = cIndex + 3;
          this.selectionEnd = cIndex + 3; //Keep the cursor in the right index
      }
  });



  /* Tab stuff */
  var tabSelection = document.getElementsByClassName("nav-tab-container")[0];

  tabSelection.addEventListener("click", function() {

      /* Do nothing if not a tab */
      if (event.target.parentElement !== tabSelection) {
          return;
      }

      /* Get the <li> element */
      var selectedTab = event.target;

      /* get the ID for the actual content element */
      var identifier = selectedTab.getAttribute("data-tab") +
          "-tab";


      /* remove active class from everything */
      /* both tabs and related content */
      var tabs = tabSelection.children;
      for (var i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove("active");
          var id = tabs[i].getAttribute("data-tab") + "-tab";
          var el = document.getElementById(id);
          el.classList.remove("active");
      }

      var newTabContent = document.getElementById(identifier);

      /* set to active */
      selectedTab.classList.add("active");
      newTabContent.classList.add("active");




  });




  /* Build out the templates */
  var templateContainer = document.getElementsByClassName("templates_container")[0];
  //var listContainer = document.getElementsByClassName("templates_list")[0];

  
  /*new template code */
  var templateSelections2 = document.getElementsByClassName("template_select")[0];

  templateSelections2.addEventListener("change", function(e) {

      /* Get Template */
      var dict = templates[apiObjects.value];
      if (!dict) return;
      var template = dict[templateSelections2.value];
      
      if (!template) {return;}

      /* Make presets happen */
      checkbox.checked = template.auth_as ? true : false;
      checkbox.dispatchEvent(new Event('change'));

      //apiObjects.value = templateSelections.value;
      //apiObjects.dispatchEvent(new Event('change'));

            /* Legacy Behavior: Was supposed to make a tmplt selection update
        action/method selection but not necessary while template selections are limited 
        each action
      apiMethods.value = template.method;
      apiMethods.dispatchEvent(new Event('change'));
        console.log("Right here");
    */
      var val = JSON.parse(template.data);
      val = JSON.stringify(val, null, 3);
      requestData.value = val;
      
      
      /* Set endpoint parameters */
      /* Right now only exists for the Country Spec Template */
      if (template.setEndpointParams) {
            var prompts = document.getElementsByClassName("object_id_input");
            for (var i = 0; i < prompts.length; i++) {
                var prompt = prompts[i];
              var attr = prompt.getAttribute("placeholder");
              
              if (Object.keys(template.setEndpointParams).includes(attr)) {
                    prompt.value = template.setEndpointParams[attr];
              }
          }
      }

  });

  var toolButton = document.getElementById("tool-button");
  /*
  listContainer.addEventListener("click", function(event) {

      if (event.target.parentElement !== listContainer) {
          return;
      }

      var link = event.target;

     //  Get Template 
      var dict = templates[templateSelections.value];
      var template = dict[link.textContent];

      // Make presets happen 
      checkbox.checked = template.auth_as ? true : false;
      checkbox.dispatchEvent(new Event('change'));

      apiObjects.value = templateSelections.value;
      apiObjects.dispatchEvent(new Event('change'));

      apiMethods.value = template.method;
      apiMethods.dispatchEvent(new Event('change'));

      var val = JSON.parse(template.data);
      val = JSON.stringify(val, null, 3);
      requestData.value = val;
      
      
      // Set endpoint parameters 
      // Right now only exists for the Country Spec Template 
      if (template.setEndpointParams) {
            var prompts = document.getElementsByClassName("object_id_input");
            for (var i = 0; i < prompts.length; i++) {
                var prompt = prompts[i];
              var attr = prompt.getAttribute("placeholder");
              
              if (Object.keys(template.setEndpointParams).includes(attr)) {
                    prompt.value = template.setEndpointParams[attr];
              }
          }
      }
      
      

      // Switch to tool tab 
      toolButton.click();

  });*/




  /* hist tab drop down */
  var hist = document.getElementById("history-tab");
  hist.addEventListener("click", function(event) {
      var target = event.target;
      if (!target.classList.contains("history_item_clickable")) {
          return;
      }

      var parent = target.parentElement;
      var sibling = parent.getElementsByClassName("history_item_info")[0];

      /* If being clicked and already visible, make invis */
      if (sibling.classList.contains("visible")) {
          sibling.classList.remove("visible");
          target.classList.remove("visible");
          return;
      }

      /* Make all invisible*/
      var children = hist.children;
      for (var i = 0; i < children.length; i++) {
          var child = children[i];
          var cont = child.getElementsByClassName("history_item_info")[0];
          cont.classList.remove("visible");

          var h2 = child.getElementsByClassName("history_item_clickable")[0];
          h2.classList.remove("visible");
      }

      /* Now make selected item invisible */
      sibling.classList.add("visible");
      target.classList.add("visible");
  });


  /* File upload: Update selected filename */
  var fileBox = document.getElementById("file-box");
  var fileValContainer = document.getElementsByClassName("selected-file")[0];
  fileBox.addEventListener("change", function(event) {
      fileValContainer.textContent = fileBox.value.replace(/([^\\]*\\)*/, '');
  });
  /* File upload */







    /* Force template selection to match tool selection */
  function updateTemplateSelection() {
      //old ver
      //templateSelections.value = apiObjects.value;
      //templateSelections.dispatchEvent(new Event('change'));
      var wrap = document.getElementById("temp-wrapper");
      
      var templateSelections = document.getElementsByClassName("template_select")[0];
      
     var sel = templates[apiObjects.value];
     if (!sel ) {wrap.classList.remove("visible"); return;}
     
     // check against what's in action
     

     
     /*
     keySel = Object.keys(sel).filter(template => {
            var template = sel[template];
            return template.method === apiMethods.value;
     });
     
     //console.log("keySel");
     //console.log(keySel);
     
     
     sel = keySel.map(key => {
     //console.log(key);
       //return sel[key];
       return templates[apiObjects.value][key];
     });
     
     var sel = keySel.reduce((obj, key) => {
            obj[key] = templates[apiObjects.value][key];
        return obj;
     }, {});
     
     //console.log("sel");
     //console.log(sel);
     */
     //console.log("!sel");
     //console.log(!sel);
     
     if ( !sel || Object.keys(sel).length === 0) {
       wrap.classList.remove("visible");
       return;
     }
     
     templateSelections.innerHTML = "";
     wrap.classList.add("visible");
     
     
     Object.keys(sel).forEach(function(template) {
       var opt = document.createElement("option");
       opt.value = template;
       opt.textContent = template;
       templateSelections.appendChild(opt);
     });
      
      
     templateSelections.dispatchEvent(new Event('change'));
      
  }

    /* Force the first template list to generate */
  function initTemplateList() {
      //templateSelections.dispatchEvent(new Event("change"));
      updateTemplateSelection();
      templateSelections2.dispatchEvent(new Event("change"));
  }



  /* Get everything set up */
  var resource = Object.keys(apiResources[apiObjects.value]);
  populateMethodSelection(apiResources[apiObjects.value], resource);
  updateEndpointContainer(endpointContainer, apiObjects.value, apiMethods.value);
  updateRequestArea(requestContainer, apiObjects.value, apiMethods.value);
  updateLink(docLink, apiObjects.value, apiMethods.value);
  initTemplateList();


function validTestKey(str) {
      return str.includes("test");
  }








    /* action drop down wrapping css update */
    const resourceFlex = document.querySelector('#header_flex .resource');
    const actionFlex = document.querySelector('#header_flex .action');

    function checkWrap() {
        if (resourceFlex.offsetTop < actionFlex.offsetTop) {
            //actionFlex has wrapped below so we need to update actionFlex css
            actionFlex.classList.add("wrapped");
        } else {
            //undo
            actionFlex.classList.remove("wrapped");
        }
    }

    window.addEventListener('resize', checkWrap);
    checkWrap(); //need to run it on load in case it loads already wrapped

}