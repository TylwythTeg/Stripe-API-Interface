var templates = {

        balance_transactions: {
        "List All Transactions": {
                method: "list",
            data: '{}'
        },
            "List All Transactions For Payout": {
                method: "list",
            data: '{"payout": "po_*************"}'
        },
        "List All Transactions For Currency": {
                method: "list",
            data: '{"currency": "usd"}'
        },
        "List All Transactions For Type": {
                method: "list",
            data: '{"type": "application_fee"}'
        },
    },
    charges: {
        "Standard Charge": {
            method: "create",
            data: '{"amount":10000,"currency":"usd","source":"tok_visa"}'
        },
        "Standard Charge (No Capture)": {
            method: "create",
            data: '{"amount":10000,"currency":"usd","source":"tok_visa", "capture": false}'
        },
        "Standard Charge (Saved Customer)": {
            method: "create",
            data: '{"amount":10000,"currency":"usd","customer":"cus_*************"}'
        },
        "Direct Charge": {
            auth_as: true,
            method: "create",
            data: '{"amount":10000,"currency":"usd","source":"tok_visa","application_fee_amount":1000}'
        },
        "Destination Charge (destination)": {
            method: "create",
            data: '{ "amount": 10000, "currency": "usd", "source": "tok_visa", "destination": { "amount": 10000, "account": "acct_*************" } }'
        },
        "Destination Charge (transfer_data)": {
            method: "create",
            data: '{ "amount": 10000, "currency": "usd", "source": "tok_visa", "transfer_data": { "amount": 10000, "destination": "acct_*************" } }'
        },
        "Destination Charge (transfer_data on_behalf_of)": {
            method: "create",
            data: '{ "amount": 10000, "currency": "usd", "source": "tok_visa", "transfer_data": { "amount": 10000, "destination": "acct_*************" }, "on_behalf_of": "acct_*************" }'
        },
        "SCT Charge (on_behalf_of)": {
            method: "create",
            data: '{"amount":10000,"currency":"usd","source":"tok_visa", "on_behalf_of": "acct_*************" }',
        },
        "Account Debit": {
            method: "create",
            data: '{ "amount": 10000, "currency": "usd", "source": "acct_*************" }',
        },
        "Update Charge With Metadata": {
            method: "update",
            data: '{ "metadata": {"custom_field": "Some text"}}',
        },
        "Capture Charge": {
                method: "capture",
            data: '{}'
        },
        "Capture Charge And Set A New Descriptor": {
                method: "capture",
            data: '{"statement_descriptor": "New Statement Descriptor Set On Capture API Call"}'
        },
        "List All Charges": {
                method: "list",
            data: '{}'
        },
        "List All Charges For Customer": {
                method: "list",
            data: '{"customer": "cus_*************"}'
        },
        "List All Charges For Payment Intent": {
                method: "list",
            data: '{"payment_intent": "pi_*************"}'
        }

    },

    customers: {
        "Create Customer": {
            method: "create",
            data: '{ "source": "tok_visa", "email": "test@customer.com" }',
        },
        "Update Customer With Metadata": {
            method: "update",
            data: '{ "metadata": { "preferred_customer": true, "favorite_letter": "a" } }',
        },
        
        "Attach Source To Customer (Make Default / Delete Previous Default)": {
            method: "update",
            data: '{ "source": "tok_visa" }',
        },
        
        "Update Default Source": {
            method: "update",
            data: '{ "default_source": "src_****" }',
        },
        
        "Apply Coupon (Only Applies To Invoices)": {
            method: "update",
            data: '{ "coupon": "coupon_*************"}',
        },
        "List All Customers": {
                method: "list",
            data: '{}'
        },
    },
    
    disputes: {
    "Update Dispute With Metadata": {
            method: "update",
            data: '{ "metadata": { "noteworthy": true} }',
        },
      "Add Evidence (Stage)": {
         method: "update",
         data: '{"evidence": {"access_activity_log": "22 August 2019 27.249.29.134 /checkout/order1312","billing_address": "1212 Ocean View Andromeda, CA 96823","customer_name": "Robert Burns","customer_purchase_ip": "27.249.29.134","uncategorized_text": "He told me over the phone he would commit fraud and we did not start recording calls until next tuesday"}, "submit": false}'
      },
      "Add Evidence (Submit)": {
         method: "update",
         data: '{"evidence": {"access_activity_log": "22 August 2019 27.249.29.134 /checkout/order1312","billing_address": "1212 Ocean View Andromeda, CA 96823","customer_name": "Robert Burns","customer_purchase_ip": "27.249.29.134","uncategorized_text": "He told me over the phone he would commit fraud and we did not start recording calls until next tuesday"}}'
      },
      "List All Disputes": {
                method: "list",
            data: '{}'
        },
    
    },
    
    events: {
            "List All Events": {
            method: "list",
          data: '{}'      
        },
                "List All Pending/Failed Events": {
            method: "list",
          data: '{"delivery_success": false}'      
        },
        "List All Events Of One Type": {
            method: "list",
          data: '{"type": "charge.succeeded"}'      
        },
        "List All Events Of Many Types": {
            method: "list",
          data: '{"types": ["charge.succeeded","customer.created"]}'      
        },
        },


    transfers: {
        "Create Transfer": {
            method: "create",
            data: '{ "amount": 1000, "currency": "usd", "destination": "acct_*************" }',
        },
        "Transfer From Account (Account Debit)": {
            auth_as: true,
            method: "create",
            data: '{ "amount": 1000, "currency": "usd", "destination": "platform_acct_*************" }',
        },

    },

    files: {
        "Upload Identity Document": {
            method: "create",
            data: '{ "purpose": "identity_document" }',
        },
        "List All Files": {
                method: "list",
            data: "{}"
        },
        "List All Identity Documents": {
                method: "list",
            data: '{"purpose": "identity_document"}'
        },
    },
    
    file_links: {
            "Create File Link": {
                method: "create",
            data: '{"file": "file_*************"}'
        },
        "Create File Link With Expiration": {
                method: "create",
            data: '{"file": "file_*************", "expires_at": "insert_unix_timestamp"}'
        },
        "Update File Link With Metadata": {
                method: "update",
            data: '{"something_important": "something you should know about this file link, something you dont know about it"}'
        },
        "Expire File Link Immediately": {
                method: "update",
            data: '{"expires_at": "now"}'
        },
        "List All File Links": {
                method: "list",
            data: "{}"
        },
        "List All Active File Links": {
                method: "list",
            data: '{"expired": false}'
        },
        "List All Expired File Links": {
                method: "list",
            data: '{"expired": true}'
        },
        "List All File Links For File": {
                method: "list",
            data: '{"file": "file_*************"}'
        },
    },
    
    payouts: {
        "Create Manual Payout (Self)": {
            method: "create",
            data: '{ "amount": 10000, "currency": "usd" }',
        },
        "Create Manual Payout (Connect)": {
            auth_as: true,
            method: "create",
            data: '{ "amount": 10000, "currency": "usd" }',
        },
        "Create Instant Payout (Connect)": {
            auth_as: true,
            method: "create",
            data: '{ "amount": 10000, "currency": "usd", "method": "instant" }',
        },
        "Update Payout With Metadata": {
            method: "update",
            data: '{ "metadata": {"custom_field": "Some text"}}',
        },
        "List All Payouts": {
            method: "list",
            data: '{}',
        },
        "List All Payouts To External Account": {
            method: "list",
            data: '{"destination": "ba_************* or card_*************"}',
        },
        "List All Paid Payouts": {
            method: "list",
            data: '{"status": "paid"}',
        },
        "List All Failed Payouts": {
            method: "list",
            data: '{"status": "failed"}',
        },
    },
    
    // TODO
    products: {
        "Create Product (Good)": {
            method: "create",
            data: '{ "name": "cool_product", "type": "good" }',
        },
        "Create Product (Good) With Attributes": {
            method: "create",
            data: '{ "name": "shirt", "type": "good", "attributes": ["size", "gender"] }',
        },
        "Create Product (Good) With Attributes And Shipping Info": {
            method: "create",
            data: '{ "name": "shirt", "type": "good", "attributes": ["size", "gender"], "package_dimensions": {"height": 19, "length": 15, "weight": 32, "width": 15} }',
        },
        "Update Product (Good) With Metadata": {
            method: "update",
            data: '{ "metadata": {"custom_field": "Some text"}}',
        },
        "List All Products (Goods)": {
            method: "list",
            data: '{"type": "good"}',
        },
        "List All Products (Goods) From IDs": {
            method: "list",
            data: '{"ids": ["prod_*************", "prod_*************"]}',
        },
        "List All Shippable Products (Goods)": {
            method: "list",
            data: '{"type": "good", "shippable": true}',
        },
        "List All Unshippable Products (Goods)": {
            method: "list",
            data: '{"type": "good", "shippable": false}',
        },
        "List All Active Products (Goods)": {
            method: "list",
            data: '{"type": "good", "active": "true"}',
        },
        "List All Inactive Products (Goods)": {
            method: "list",
            data: '{"type": "good", "active": "false"}',
        },
    },
    
    payment_intents: {
            "Standard Payment Intent (Auto Confirm)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd" }',
        },
        "Standard Payment Intent (Manual Confirm)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd", "confirmation_method": "manual" }',
        },
        "Standard Payment Intent (Auto Confirm) (Saved Customer)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd", "customer": "cus_*************" }',
        },
        "Standard Payment Intent (Manual Confirm) (Saved Customer)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd", "customer": "cus_*************", "confirmation_method": "manual" }',
        },
        "Standard Payment Intent (No Capture)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd", "capture_method": "manual" }',
        },
        "Direct Payment Intent (Auto Confirmation)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd", "application_fee_amount": 1000 }',
          auth_as: true
        },
        "Direct Payment Intent (Manual Confirm)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd", "confirmation_method": "manual", "application_fee_amount": 1000 }',
          auth_as: true
        },
        "Dest Payment Intent (destination) (Auto Confirm)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd","destination": { "amount": 10000, "account": "acct_*************" } }'
        },
        "Dest Payment Intent (destination) (Manual Confirm)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd", "confirmation_method": "manual",\, "destination": { "amount": 10000, "account": "acct_*************" } }'
        },
        "Dest Payment Intent (transfer_data) (Auto Confirm)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd", "transfer_data": { "amount": 10000, "destination": "acct_*************" } }'
        },
        "Dest Payment Intent (transfer_data) (Manual Confirm)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd", "confirmation_method": "manual", "transfer_data": { "amount": 10000, "destination": "acct_*************" } }'
        },
        "Dest Payment Intent (transfer_data on_behalf_of) (Auto Confirm)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd", "transfer_data": { "amount": 10000, "destination": "acct_*************" }, "on_behalf_of": "acct_*************" }'
        },
        "Dest Payment Intent (transfer_data on_behalf_of) (Manual Confirm)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd", "confirmation_method": "manual", "transfer_data": { "amount": 10000, "destination": "acct_*************" }, "on_behalf_of": "acct_*************" }'
        },
        "SCT Payment Intent (Auto Confirmation) (on_behalf_of)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd", "on_behalf_of": "acct_*************"}'
        },
        "SCT Payment Intent (Manual Confirm) (on_behalf_of)": {
            method: "create",
          data: '{ "amount": 10000, "currency": "usd", "confirmation_method": "manual", "on_behalf_of": "acct_*************" }',
    },
        "Get Payment Intent (Secret Key)": {
            method: "retrieve",
          data: '{}',
    },
        "Get Payment Intent (Publishable Key)": {
            method: "retrieve",
          data: '{ "client_secret": "client_secret_for_payment_intent_*************" }',
    },
     "Update Payment Intent With Metadata": {
            method: "update",
          data: '{ "metadata": {"custom_field": "Some text"}}',
    },
     "Update Payment Intent Amount And Currency": {
            method: "update",
          data: '{ "amount": 20000, "currency": "eur" }',
    },
    "Confirm Payment Intent (On Session/Both Keys)": {
            method: "confirm",
          data: '{}',
    },
    "Confirm Payment Intent (Off Session/Secret Key)": {
            method: "confirm",
          data: '{ "off_session": true }',
    },
    
    "Capture Payment Intent": {
            method: "capture",
          data: '{}',
    },
    "Cancel Payment Intent": {
            method: "cancel",
          data: '{}',
    },
    "Cancel Payment Intent (Requested By Customer)": {
            method: "cancel",
          data: '{"cancellation_reason": "requested_by_customer"}',
    },
    "List All Payment Intents": {
            method: "list",
          data: '{}',
    },
    "List All Payment Intents For Customer": {
                method: "list",
            data: '{"customer": "cus_*************"}'
        },
    
    },
    
    setup_intents: {
        "Create Setup Intent (Off Session)": {
            method: "create",
            data: '{}',
        },
        "Create Setup Intent (Off Session) (Saved Customer)": {
            method: "create",
            data: '{"customer": "cus_*************"}',
        },
        "Create Setup Intent (On Session)": {
            method: "create",
            data: '{"usage": "on_session"}',
        },
        "Create Setup Intent (On Session) (Saved Customer)": {
            method: "create",
            data: '{"usage": "on_session","customer": "cus_*************"}',
        },
        "Create Setup Intent (Off Session) (on_behalf_of)": {
            method: "create",
            data: '{"on_behalf_of": "acct_*************"}',
        },
        "Create Setup Intent (On Session) (on_behalf_of)": {
            method: "create",
            data: '{"on_behalf_of": "acct_*************", "usage": "on_session"}',
        },
        "Retrieve Setup Intent (Both Keys)": {
            method: "retrieve",
            data: '{}',
        },
        "Retrieve Setup Intent (Publishable Key)": {
            method: "retrieve",
            data: '{"client_secret": "client_secret_*************"}',
        },
        "Update A Setup Intent With Metadata": {
            method: "update",
            data: '{"metadata": {"what I learned in boating school": "blankity blankity blank"}}',
        },
        "Confirm Setup Intent": {
            method: "confirm",
            data: '{}',
        },
        "Capture Setup Intent": {
            method: "capture",
            data: '{}',
        },
        "Cancel Setup Intent": {
            method: "cancel",
            data: '{}',
        },
        "Cancel Setup Intent (Requested By Customer)": {
            method: "cancel",
            data: '{"cancellation_reason": "requested_by_customer"}',
        },
        "List All Setup Intents": {
            method: "list",
            data: '{}',
        },
        "List All Setup Intents For Customer": {
            method: "list",
            data: '{"customer": "cus_*************"}',
        },
        "List All Setup Intents For Payment Method": {
            method: "list",
            data: '{"payment_method": "pm_*************"}',
        },
    },

    refunds: {
        "Create Refund": {
            method: "create",
            data: '{ "charge": "ch_*************" }',
        },
        "Create Refund (Partial)": {
            method: "create",
            data: '{ "charge": "ch_*************", "amount": 1000 }',
        },
        "Create Direct Charge Refund (refund_application_fee)": {
            auth_as: true,
            method: "create",
            data: '{ "charge": "ch_*************", "refund_application_fee": true }',
        },
        "Create Destination Charge Refund (reverse_transfer)": {
            method: "create",
            data: '{ "charge": "ch_*************", "reverse_transfer": true }',
        },
        "Update Refund With Metadata": {
            method: "update",
            data: '{ "metadata": {"custom_field": "Some text"}}',
        },
        "List All Refunds": {
            method: "list",
            data: '{}',
        },
        "List All Refunds For Charge": {
            method: "list",
            data: '{"charge": "ch_*************"}',
        },
    },

    tokens: {
        "Create Card Token": {
            method: "create",
            data: '{ "card": { "number": "4242424242424242", "exp_month": 12, "exp_year": 2022, "cvc": "123" } }',
        },
        "Create Bank Token": {
            method: "create",
            data: '{ "bank_account": { "country": "US", "currency": "usd", "account_holder_name": "Liam Jackson", "account_holder_type": "individual", "routing_number": "110000000", "account_number": "000123456789" } }',
        },
        "Create PII Token": {
            method: "create",
            data: '{ "pii": { "personal_id_number": "000000000" } }',
        },
        "Create Account Token": {
            method: "create",
            data: '{ "account": { "legal_entity": { "first_name": "Jane", "last_name": "Doe" }, "tos_shown_and_accepted": true } }',
        },
        "Create Shared Token (Connect)": {
            auth_as: true,
            method: "create",
            data: '{"customer": "cus_*************"}',
        },

    },
    
    payment_methods: {
        "Create Payment Method (card) From Dictionary": {
            method: "create",
            data: '{ "type": "card", "card": {"exp_month": 12,"exp_year": 2022, "number": "4242424242424242", "cvc": "123"} }',
        },
        "Create Payment Method (card) From Token": {
            method: "create",
            data: '{ "type": "card", "card": {"token": "tok_visa"} }',
        },
        "Create Payment Method (card_present)": {
            method: "create",
            data: '{ "type": "card_present" }',
        },
        "Update Payment Method With Metadata": {
            method: "update",
            data: '{ "metadata": {"something_cool": "My favorite payment method by far"} }',
        },
        "Attach Payment Method To Customer": {
            method: "attach",
            data: '{ "customer": "cus_*************"}',
        },
        "List All Customer's Payment Methods (card)": {
            method: "list",
            data: '{ "customer": "cus_*************", "type": "card"}',
        },
        "List All Customer's Payment Methods (card_present)": {
            method: "list",
            data: '{ "customer": "cus_*************", "type": "card_present"}',
        },
    },

    bank_accounts: {
        "Create Bank Account From Token": {
            method: "create",
            data: '{ "source": "tok_*************" }',
        },
        "Create Bank Account From Dictionary": {
            method: "create",
            data: '{ "source": { "object": "bank_account", "country": "US", "currency": "usd", "account_holder_name": "Liam Jackson", "account_holder_type": "individual", "routing_number": "110000000", "account_number": "000123456789" } }',
        },
        "Update Bank Account With Metadata": {
            method: "update",
            data: '{ "metadata": {"something_cool": "cool bank account"} }',
        },
        "Verify Bank Account Manually": {
            method: "verify",
            data: '{ "amounts": [ 23, 45 ] }',
        },
        "List All Bank Accounts For Customer": {
            method: "list",
            data: '{}',
        },
    },

    cards: {
        "Create Card From Token": {
            method: "create",
            data: '{ "source": "tok_*************" }',
        },
        "Create Card From Dictionary": {
            method: "create",
            data: '{ "source": { "object": "card", "number": "4242424242424242", "exp_month": 12, "exp_year": 2022, "cvc": "123" } }',
        },
        "Update Card With Metadata": {
            method: "update",
            data: '{ "metadata": {"something_cool": "cool card"} }',
        },
        "List All Cards For Customer": {
            method: "list",
            data: '{}',
        },
    },


    sources: {
        
        
        
         "Create 3DS Source": {
                method: 'create',
            data: '{ "type": "three_d_secure", "amount": 1099, "currency": "usd", "three_d_secure": { "card": "src_*************" }, "redirect": { "return_url": "https://shop.example.com/crtA6B28E1" } }',
        },
        
       
        
        "Create ACH Debit Source": {
            method: "create",
            data: '{ "type": "ach_debit", "currency": "usd", "ach_debit": { "country": "US", "type": "individual", "routing_number": "110000000", "account_number": "000123456789" }, "owner": { "name": "Liam Jackson" } }',
        },
        
         "Create ACH Credit Transfer Source": {
            method: "create",
            data: '{ "type": "ach_credit_transfer", "currency": "usd", "owner": { "email": "amount_1000@example.com" } }',
        },
        
        "Create Alipay Source": {
                method: "create",
            data: '{ "type": "alipay", "amount": 1099, "currency": "usd", "redirect": { "return_url": "https://shop.example.com/crtA6B28E1" } }',
        },

        "Create Bancontact Source": {
            method: 'create',
            data: '{ "type": "bancontact", "amount": 1000, "currency": "eur", "owner": { "name": "Richard Cory" }, "redirect": { "return_url": "https://shop.example.com/crtA6B28E1" } }',
        },
        
        "Create Card Source": {
                method: 'create',
            data: '{ "type": "card", "card": { "number": "4242424242424242", "exp_month": 12, "exp_year": 2022, "cvc": "123" } }',
        },
        
        "Create EPS Source": {
                method: 'create',
                        data: '{ "type": "eps", "amount": 1099, "currency": "eur", "owner": { "name": "Jenny Rosen" }, "redirect": { "return_url": "https://shop.example.com/crtA6B28E1" } }',
        },
        
        "Create Giropay Source": {
                method: 'create',
            data: '{ "type": "giropay", "amount": 1099, "currency": "eur", "owner": { "name": "Jenny Rosen" }, "redirect": { "return_url": "https://shop.example.com/crtA6B28E1" } }'
        },
        
        "Create iDEAL Source": {
                method: 'create',
            data: '{ "type": "ideal", "amount": 1099, "currency": "eur", "redirect": { "return_url": "https://shop.example.com/crtA6B28E1" } }',
        },
        
        "Create Multibanco Source": {
                method: 'create',
            data: '{ "type": "multibanco", "amount": 1099, "currency": "eur", "owner": { "name": "Jenny Rosen", "email": "jenny.rosen@example.com" }, "redirect": { "return_url": "https://shop.example.com/crtA6B28E1" } }',
        },
        
        "Create P24 Source": {
                method: 'create',
            data: '{ "type": "p24", "amount": 1099, "currency": "eur", "owner": { "name": "Jenny Rosen", "email": "jenny.rosen@example.com" }, "redirect": { "return_url": "https://shop.example.com/crtA6B28E1" } }',
        },
        
        "Create SEPA debit Source": {
                method: 'create',
            data: '{ "type": "sepa_debit", "currency": "eur", "sepa_debit": { "iban": "DE89370400440532013000" }, "owner": { "name": "Jenny Rosen" } }',
        },
        
        "Create SOFORT Source": {
                method: 'create',
            data: '{ "type": "sofort", "amount": 1099, "currency": "eur", "redirect": { "return_url": "https://shop.example.com/crtA6B28E1" }, "sofort": { "country": "DE" } }',
        },
        
        "Update Source With Metadata": {
            method: "update",
            data: '{ "metadata": {"something_cool": "cool source"} }',
        },
        
        "Update ACH Credit Source Balance": {
            method: "update",
            data: '{ "owner": { "email": "amount_1000@example.com" } }'
        },

        "Attach Source To Customer": {
            method: "attach",
            data: '{ "source": "src_*************" }'
        },
        
        
        
        "List All Sources For Customer": {
            method: "list",
            data: '{}'
        },

    },

    invoices: {
        "Create Draft Invoice (Manual Charge)": {
            method: "create",
            data: '{ "customer": "cus_*************", "billing": "send_invoice", "days_until_due": 30 }',
        },

        "Create Draft Invoice (Auto Charge)": {
            method: "create",
            data: '{ "customer": "cus_*************", "billing": "charge_automatically" }',
        },
        "Update Invoice With Metadata": {
            method: "update",
            data: '{ "metadata": {"something_noteworthy": "Invoice info"} }',
        },
        "Finalize Draft Invoice": {
            method: "finalize_draft",
            data: '{}',
        },
        "Pay Invoice": {
            method: "pay",
            data: '{}',
        },
        "Pay Invoice (Specify Payment Method)": {
            method: "pay",
            data: '{"payment_method": "pm_*************"}',
        },
        "Pay Invoice (Specify Source)": {
            method: "pay",
            data: '{"source": "src_*************"}',
        },
        "Retrieve All Invoice Line Items": {
            method: "invoice_lines",
            data: '{}',
        },
        "Retrieve Upcoming Invoice For Customer": {
            method: "upcoming_invoice",
            data: '{ "customer": "cus_*************" }',
        },
        "Retrieve Upcoming Invoice For Subscription": {
            method: "upcoming_invoice",
            data: '{ "subscription": "sub_*************" }',
        },
        "Retrieve Upcoming Invoice Line Items For Customer": {
            method: "upcoming_invoice_lines",
            data: '{ "customer": "cus_*************" }',
        },
        "Retrieve Upcoming Invoice Line Items For Subscription": {
            method: "upcoming_invoice_lines",
            data: '{ "subscription": "sub_*************" }',
        },

    },

    invoice_items: {
        "Add Invoice Item (Upcoming)": {
            method: "create",
            data: '{ "amount": 1000, "currency": "usd", "customer": "cus_*************", "description": "One-time setup fee" }',
        },
        "Add Invoice Item (Upcoming Specific Subscription)": {
            method: "create",
            data: '{ "amount": 1000, "currency": "usd", "customer": "cus_*************", "subscription": "sub_*************", "description": "One-time setup fee" }',
        },
        "Add Invoice Item (Specific Draft Invoice)": {
            method: "create",
            data: '{ "amount": 1000, "currency": "usd", "customer": "cus_*************", "invoice": "in_*************", "description": "One-time setup fee" }',
        },
        "Update Invoice Item With Metadata": {
            method: "update",
            data: '{ "metadata": {"something_cool": "cool invoice item"} }',
        },
        "List All Invoice Items": {
            method: "list",
            data: '{}',
        },
        "List All Invoice Items For Invoice": {
            method: "list",
            data: '{"invoice": "in_*************"}',
        },
        "List All Invoice Items For Customer": {
            method: "list",
            data: '{"customer": "cus_*************"}',
        },


    },

    subscription_products: {
        "Create Product (Subscription)": {
            method: "create",
            data: '{ "name": "My SaaS Platform", "type": "service" }',
        },
            "Update Product (Subscription) With Metadata": {
            method: "update",
            data: '{ "metadata": {"something_cool": "cool subscription product"} }',
        },
        "List All Products (Subscription)": {
            method: "list",
            data: '{"type": "service"}',
        },
        "List All Active Products (Subscription)": {
            method: "list",
            data: '{"type": "service", "active": true}',
        },
        "List All Inactive Products (Subscription)": {
            method: "list",
            data: '{"type": "service", "active": false}',
        },
    },

    plans: {
        "Create Plan (Licensed)": {
            method: "create",
            data: '{ "currency": "usd", "interval": "month", "product":"prod_*************", "nickname":"Pro Plan (Licensed)", "amount":3000 }',
        },
        "Create Plan (Metered)": {
            method: "create",
            data: '{ "currency": "usd", "interval": "month", "product":"prod_*************", "nickname":"Pro Plan (Metered)", "usage_type":"metered", "amount":3000 }',
        },
        "Create Plan (Tiered: Volume, Licensed)": {
            method: "create",
            data: '{ "currency": "usd", "interval": "month", "product": "prod_*************", "nickname": "Tiered Plan (Volume, Licensed)", "billing_scheme": "tiered", "tiers": [ { "amount": 500, "up_to": 4 }, { "amount": 2500, "up_to": "inf" } ], "tiers_mode": "volume" }',
        },
        "Create Plan (Tiered: Graduated, Licensed)": {
            method: "create",
            data: '{ "currency": "usd", "interval": "month", "product": "prod_*************", "nickname": "Tiered Plan (Graduated, Licensed)", "billing_scheme": "tiered", "tiers": [ { "amount": 500, "up_to": 4 }, { "amount": 2500, "up_to": "inf" } ], "tiers_mode": "graduated" }',
        },
        "Create Plan (Tiered: Volume, Metered)": {
            method: "create",
            data: '{ "currency": "usd", "interval": "month", "product": "prod_*************", "nickname": "Tiered Plan (Volume, Metered)", "billing_scheme": "tiered", "usage_type": "metered", "tiers": [ { "amount": 500, "up_to": 4 }, { "amount": 2500, "up_to": "inf" } ], "tiers_mode": "volume" }',
        },
        "Create Plan (Tiered: Graduated, Metered)": {
            method: "create",
            data: '{ "currency": "usd", "interval": "month", "product": "prod_*************", "nickname": "Tiered Plan (Graduated, Metered)", "billing_scheme": "tiered", "usage_type": "metered", "tiers": [ { "amount": 500, "up_to": 4 }, { "amount": 2500, "up_to": "inf" } ], "tiers_mode": "graduated" }',
        },
        
        "Update Plan With Metadata": {
            method: "update",
            data: '{ "metadata": {"something_cool": "cool plan"} }',
        },
        "List All Plans": {
            method: "list",
            data: '{}',
        },
        "List All Plans For Product": {
            method: "list",
            data: '{"product": "prod_*************"}',
        },
        "List All Active Plans": {
            method: "list",
            data: '{"active": true}',
        },
        "List All Active Plans For Product": {
            method: "list",
            data: '{"active": true,"product": "prod_*************"}',
        },
    },

    subscriptions: {
        "Create Auto Subscription": {
            method: 'create',
            data: '{ "customer": "cus_*************", "plan": "plan_*************" }',
        },
        "Create Auto Subscription With Specific Billing Date": {
            method: 'create',
            data: '{ "customer": "cus_*************", "plan": "plan_*************", "billing_cycle_anchor": 1575244820 }',
        },
        "Create Auto Subscription With Billing Date Changing On Money Threshold": {
            method: 'create',
            data: '{ "customer": "cus_*************", "plan": "plan_*************", "billing_thresholds": {"amount_gte": 10000, "reset_billing_cycle_anchor": true} }',
        },
        "Create Manual Subscription (Send Invoice)": {
            method: 'create',
            data: '{ "customer": "cus_*************", "plan": "plan_*************", "collection_method": "send_invoice" }',
        },
        "Create Man. Subscription With Specific Billing Date": {
            method: 'create',
            data: '{ "customer": "cus_*************", "plan": "plan_*************", "collection_method": "send_invoice", "billing_cycle_anchor": 1575244820 }',
        },
        "Create Man. Subscription With Billing Date Changing On Money Threshold": {
            method: 'create',
            data: '{ "customer": "cus_*************", "plan": "plan_*************", "collection_method": "send_invoice", "billing_thresholds": {"amount_gte": 10000, "reset_billing_cycle_anchor": true} }',
        },
        "Update Subscription With Metadata": {
            method: "update",
            data: '{ "metadata": {"this": "is metadata"} }',
        },
        "Update and Prorate": {
            method: "update",
            data: '{ "prorate": true }',
        },
        "Update Subscription Quantity (Single Plan)": {
            method: "update",
            data: '{ "quantity": 1 }',
        },
        "List All Subscriptions": {
            method: "list",
            data: '{}',
        },
        "List All Manual (Send Invoice) Subscriptions": {
            method: "list",
            data: '{"collection_method": "send_invoice"}',
        },
        "List All Automatic Subscriptions": {
            method: "list",
            data: '{"collection_method": "charge_automatically"}',
        },
        "List All Subscriptions For Customer": {
            method: "list",
            data: '{"customer": "cus_*************"}',
        },
        "List All Subscriptions For Plan": {
            method: "list",
            data: '{"plan": "plan_*************"}',
        },
        "List All Active Subscriptions": {
            method: "list",
            data: '{"status": "active"}',
        },
    },

    subscription_items: {
            "Create Subscription Item": {
            method: "create",
            data: '{ "plan": "plan_*************",  "subscription": "sub_*************"}',
        },
        "Update Subscription Item Quantity": {
            method: "update",
            data: '{ "quantity": 1 }',
        },
        "Update Subscription Item With Metadata": {
            method: "update",
            data: '{ "metadata": {"this": "is metadata"} }',
        },
        "Delete Subscription Item": {
            method: "delete",
            data: '{}',
        },
        "List All Subscription Items For Subscription": {
            method: "list",
            data: '{"subscription": "sub_*************"}',
        },

    },
    
    tax_rates: {
            "Create Tax Rate (Inclusive)": {
            method: "create",
            data: '{ "display_name": "Cool Inclusive Tax", "inclusive": true,  "percentage": 10}',
        },
        "Create Tax Rate (Exclusive)": {
            method: "create",
            data: '{ "display_name": "Cool Exclusive Tax", "inclusive": false,  "percentage": 10}',
        },
        "Update Tax Rate With Metadata": {
            method: "update",
            data: '{ "metadata": {"this": "is metadata"} }',
        },
        "List All Tax Rates": {
            method: "list",
            data: '{}',
        },
         "List All Active Tax Rates": {
            method: "list",
            data: '{"active": true}',
        },
        "List All Active Inclusive Tax Rates": {
            method: "list",
            data: '{"active": true, "inclusive": true}',
        },
        "List All Active Exclusive Tax Rates": {
            method: "list",
            data: '{"active": true, "inclusive": false}',
        },
        "List All Inactive Tax Rates": {
            method: "list",
            data: '{"active": false}',
        },
        "List All Inactive Inclusive Tax Rates": {
            method: "list",
            data: '{"active": false, "inclusive": true}',
        },
        "List All Inactive Exclusive Tax Rates": {
            method: "list",
            data: '{"active": false, "inclusive": false}',
        },

    },
    
    checkout_sessions: {
    
    "Create Checkout Session (Standard Charge)": {
            method: "create",
          data: '{ "payment_method_types": [ "card" ], "line_items": [ { "name": "CucumberfromRichardsFarm", "amount": 10000, "currency": "usd", "quantity": 10 } ], "success_url": "https://example.com/success", "cancel_url": "https://example.com/cancel" }'
        },
    
    "Create Checkout Session (Direct Charge)": {
            method: "create",
          data: '{ "payment_method_types": [ "card" ], "line_items": [ { "name": "CucumberfromRichardsFarm", "amount": 10000, "currency": "usd", "quantity": 10 } ], "payment_intent_data": { "application_fee_amount": 1000 }, "success_url": "https://example.com/success", "cancel_url": "https://example.com/cancel" }'
        },
        
            "Create Checkout Session (Destination / App Fee)": {
                method: "create",
            data: '{"payment_method_types":["card"],"line_items":[{"name":"CucumberfromRichardsFarm","amount":10000,"currency":"usd","quantity":10}],"payment_intent_data":{"transfer_data":{"destination":"{{CONNECTED_STRIPE_ACCOUNT_ID}}"},"application_fee_amount":1000},"success_url":"https://example.com/success","cancel_url":"https://example.com/cancel"}'
        },
        
        "Create Checkout Session (SCT / on_behalf_of)": {
                method: "create",
            data: '{"payment_method_types":["card"],"line_items":[{"name":"CucumberfromRichardsFarm","amount":10000,"currency":"usd","quantity":10}],"payment_intent_data":{"on_behalf_of": "acct_*************"},"success_url":"https://example.com/success","cancel_url":"https://example.com/cancel"}'
        },
        
        
    
    },
    
    coupons: {
        "Endlessly Repeating Coupon (Amount)": {
            method: 'create',
            data: '{ "amount_off": 1000, "duration": "forever" }',
        },
        "Endlessly Repeating Coupon (Percent)": {
            method: 'create',
            data: '{ "percent_off": 10, "duration": "forever" }',
        },
        "Limited Repeating Coupon (Amount)": {
            method: 'create',
            data: '{ "amount_off": 1000, "duration": "repeating", "duration_in_months": 3 }',
        },
        "Limited Repeating Coupon (Percent)": {
            method: 'create',
            data: '{ "percent_off": 10, "duration": "repeating", "duration_in_months": 3 }',
        },
        "Single Application Coupon (Amount)": {
            method: 'create',
            data: '{ "amount_off": 1000, "duration": "once"}',
        },
        "Single Application Coupon (Percent)": {
            method: 'create',
            data: '{ "percent_off": 10, "duration": "once"}',
        },
        "Update Coupon With Metadata": {
            method: "update",
            data: '{ "metadata": {"something_cool": "cool coupon"} }',
        },
        "List All Coupons": {
            method: "list",
            data: '{}'
        },
    },
    
    credit_notes: {
        "Create Credit Note": {
            method: 'create',
            data: '{ "invoice": "in_*************", "amount": 100}',
        },
        "Create Credit Note (Credit Customer Balance)": {
            method: 'create',
            data: '{ "invoice": "in_*************", "amount": 100, "credit_amount": 100}',
        },
        "Create Credit Note (Refund Customer)": {
            method: 'create',
            data: '{ "invoice": "in_*************", "amount": 100, "refund_amount": 100}',
        },
        "Create Credit Note (Notate Credit/Refund Outside Of Stripe)": {
            method: 'create',
            data: '{ "invoice": "in_*************", "amount": 100, "out_of_band_amount": 100}',
        },
        "Preview Credit Note": {
            method: 'preview',
            data: '{ "invoice": "in_*************", "amount": 100}',
        },
        "Preview Credit Note (Credit Customer Balance)": {
            method: 'preview',
            data: '{ "invoice": "in_*************", "amount": 100, "credit_amount": 100}',
        },
        "Preview Credit Note (Refund Customer)": {
            method: 'preview',
            data: '{ "invoice": "in_*************", "amount": 100, "refund_amount": 100}',
        },
        "Preview Credit Note (Notate Credit/Refund Outside Of Stripe)": {
            method: 'preview',
            data: '{ "invoice": "in_*************", "amount": 100, "out_of_band_amount": 100}',
        },
        "Update Credit Note With Metadata": {
            method: "update",
            data: '{ "metadata": {"something_cool": "cool credit_note_man"} }',
        },
        "List All Credit Notes": {
            method: "list",
            data: '{}'
        },
        "List All Credit Notes For Customer": {
            method: "list",
            data: '{"customer": "cus_*************"}'
        },
        "List All Credit Notes For Invoice": {
            method: "list",
            data: '{"invoice": "in_*************"}'
        },
    },
    
    customer_balance_transactions: {
        "Credit Customer Balance": {
            method: 'create',
            data: '{ "amount": -100, "currency": "usd", "customer": "cus_*************"}',
        },
        "Debit Customer Balance": {
            method: 'create',
            data: '{ "amount": 100, "currency": "usd", "customer": "cus_*************"}',
        },
        "Update Customer Balance Transactions With Metadata": {
            method: "update",
            data: '{ "metadata": {"something_cool": "cool customer_balance_txn"} }',
        },
        "List All Balance Transaction For Customer": {
            method: "list",
            data: '{}'
        },
    },
    
    customer_tax_ids: {
        "Credit Customer Tax ID": {
            method: 'create',
            data: '{ "value": "DE123456789", "type": "eu_vat"}',
        },
        "List All Tax IDs For Customer": {
            method: "list",
            data: '{}'
        },
    },

    usage_records: {
        "Increment Quantity By 1": {
            method: 'create',
            data: '{ "quantity": 1, "timestamp": 1532543273, "action": "increment" }',
        },
        "Set Explicit Quantity": {
            method: 'create',
            data: '{ "quantity": 1, "timestamp": 1532543273, "action": "set" }',
        },
        "List All Subscription Item Period Summaries": {
            method: 'list',
            data: '{}',
        },
    },

    account: {
        "Create Deferred Account (Standard)": {
            method: "create",
            data: '{ "type": "standard", "country": "US", "email": "deferreduser@gmail.com" }',
        },
        "Create Custom Account": {
            method: "create",
            data: '{ "type": "custom", "country": "US" }',
        },
        "Update Minimum Verification Requirements (US, Company)": {
                method: "update",
            data: '{ "external_account": { "object": "bank_account", "country": "US", "currency": "usd", "account_number": "000123456789", "routing_number": "110000000" }, "legal_entity": { "address": { "city": "San Francisco", "line1": "510 Townsend Street", "postal_code": "94103", "state": "CA" }, "dob": { "day": 1, "month": 1, "year": 1980 }, "first_name": "John", "last_name": "Jacob", "ssn_last_4": "0000", "type": "company" }, "tos_acceptance": { "date": 1532893551, "ip": "8.8.8.8" } }'
        },
        "Update Minimum Verification Requirements (US, Individual)": {
                method: "update",
            data: '{ "external_account": { "object": "bank_account", "country": "US", "currency": "usd", "account_number": "000123456789", "routing_number": "110000000" }, "legal_entity": { "address": { "city": "San Francisco", "line1": "510 Townsend Street", "postal_code": "94103", "state": "CA" }, "dob": { "day": 1, "month": 1, "year": 1980 }, "first_name": "John", "last_name": "Jacob", "ssn_last_4": "0000", "type": "individual" }, "tos_acceptance": { "date": 1532893551, "ip": "8.8.8.8" } }'
        },
        "Update Personal ID Number": {
                method: "update",
            data: '{ "legal_entity": { "personal_id_number": "pii_*************" } }'
        },
        "Update Verification Document": {
                method: "update",
            data: '{ "legal_entity": { "verification": { "document": "file_*************" } } }'
        },
        "Add/Replace Bank Account From Token (External Account)": {
                method: "update",
            data: '{ "external_account": "btok_*************" }'
        },
        "Add/Replace Bank Account From Dictionary (External Account)": {
                method: "update",
            data: '{ "external_account": { "object": "bank_account", "country": "US", "currency": "usd", "account_number": "000123456789", "routing_number": "110000000" } }'
        },
        "Add/Replace Card From Token (External Account)": {
                method: "update",
            data: '{ "external_account": "tok_visa_debit" }'
        },
    },
    
    country_specs: {
        "Get Country Spec (US)": {
            method: 'retrieve',
            setEndpointParams: {
                    "{COUNTRY CODE}": "US"
            },
            data: '{}',
        },
    },
    
    external_accounts: {
            "Add Bank Account From Token": {
                method: "create_bank",
            data: '{ "external_account": "btok_*************" }',
        },
        "Add Bank Account From Dictionary": {
                method: "create_bank",
            data: '{ "external_account": { "object": "bank_account", "country": "US", "currency": "usd", "account_number": "000123456789", "routing_number": "110000000" } }',
        },
        "Add Card From Token": {
                method: "create_card",
            data: '{ "external_account": "tok_visa_debit" }',
        },
        
    },
    
    topups: {
            "Create a Top Up": {
                method: "create",
            data: '{ "amount": 10000, "currency": "usd" }',
        },
        
    },

    orders: {
        "Create Order": {
            method: "create",
            data: '{ "currency": "usd", "items": [ { "type":"sku", "parent":"sku_BRZmSFbnLez0w2", "quantity": 1 } ] }',
        },
        "Create Order (With Shipping)": {
            method: "create",
            data: '{ "currency": "usd", "items": [ { "type": "sku", "parent": "sku_BRZmSFbnLez0w2", "quantity": 1 } ], "shipping": { "name":"Jenny Rosen", "address":{ "line1":"1234 Main Street", "city":"San Francisco", "state":"CA", "postal_code":"94111", "country":"US" } } }',
        },
        "Pay Order (Customer)": {
            method: "pay",
            data: '{ "customer": "cus_*************" }',
        },
        "Pay Order (Source)": {
            method: "pay",
            data: '{ "source": "tok_visa", "email": "test@email.com" }',
        },
        "Pay Connect Order (application_fee)": {
            auth_as: true,
            method: "pay",
            data: '{ "source": "tok_visa" , "email": "test@email.com","application_fee": 100 }',
        },
    },




}



/* API Functionality */
var apiResources = {
    balance: {
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/balance",
            doc_link: "https://stripe.com/docs/api#retrieve_balance",
            type: "GET",
        }
    },
    balance_transactions: {
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/balance_transactions/{TRANSACTION ID}",
            doc_link: "https://stripe.com/docs/api#balance_transaction_retrieve",
            type: "GET",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/balance_transactions",
            doc_link: "https://stripe.com/docs/api#balance_history",
            type: "GET",
            params: true
        },
    },

    charges: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/charges",
            doc_link: "https://stripe.com/docs/api#create_charge",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/charges/{CHARGE ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_charge",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/charges/{CHARGE ID}",
            doc_link: "https://stripe.com/docs/api#update_charge",
            type: "POST",
            params: true,
        },
        capture: {
            name: "Capture",
            endpoint: "api.stripe.com/v1/charges/{CHARGE ID}/capture",
            doc_link: "https://stripe.com/docs/api#capture_charge",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/charges",
            doc_link: "https://stripe.com/docs/api#list_charges",
            type: "GET",
            params: true,
        },
    },

    customers: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/customers",
            doc_link: "https://stripe.com/docs/api#create_customer",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_customer",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}",
            doc_link: "https://stripe.com/docs/api#update_customer",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}",
            doc_link: "https://stripe.com/docs/api#delete_customer",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/customers",
            doc_link: "https://stripe.com/docs/api#list_customers",
            type: "GET",
            params: true,
        },
    },

    disputes: {
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/disputes/{DISPUTE ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_dispute",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/disputes/{DISPUTE ID}",
            doc_link: "https://stripe.com/docs/api#update_dispute",
            type: "POST",
            params: true,
        },
        close: {
            name: "Close",
            endpoint: "api.stripe.com/v1/disputes/{DISPUTE ID}/close",
            doc_link: "https://stripe.com/docs/api#close_dispute",
            type: "POST",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/disputes",
            doc_link: "https://stripe.com/docs/api#list_disputes",
            type: "GET",
            params: true,
        },
    },

    events: {
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/events/{EVENT ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_event",
            type: "GET",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/events",
            doc_link: "https://stripe.com/docs/api#retrieve_event",
            type: "GET",
            params: true,
        },
    },

    files: {
        create: {
            name: "Create",
            endpoint: "files.stripe.com/v1/files",
            doc_link: "https://stripe.com/docs/api#create_file_upload",
            type: "POST",
            params: true,
            file_upload: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "files.stripe.com/v1/files/{FILE ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_file_upload",
            type: "GET",
        },
        list: {
            name: "List",
            endpoint: "files.stripe.com/v1/files",
            doc_link: "https://stripe.com/docs/api#list_file_uploads",
            type: "GET",
            params: true,
        },
    },
    
    file_links: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/file_links",
            doc_link: "https://stripe.com/docs/api/file_links/create",
            type: "POST",
            params: true
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/file_links/{LINK ID}",
            doc_link: "https://stripe.com/docs/api/file_links/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/file_links/{LINK ID}",
            doc_link: "https://stripe.com/docs/api/file_links/update",
            type: "POST",
            params: true
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/file_links",
            doc_link: "https://stripe.com/docs/api/file_links/list",
            type: "GET",
            params: true,
        },
    },

        payment_intents: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/payment_intents",
            doc_link: "https://stripe.com/docs/api/payment_intents/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/payment_intents/{PAYMENT_INTENT ID}",
            doc_link: "https://stripe.com/docs/api/payment_intents/retrieve",
            type: "GET",
            params: true
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/payment_intents/{PAYMENT_INTENT ID}",
            doc_link: "https://stripe.com/docs/api/payment_intents/update",
            type: "POST",
            params: true,
        },
        confirm: {
            name: "Confirm",
            endpoint: "api.stripe.com/v1/payment_intents/{PAYMENT_INTENT ID}/confirm",
            doc_link: "https://stripe.com/docs/api/payment_intents/confirm",
            type: "POST",
            params: true,
        },
        capture: {
            name: "Capture",
            endpoint: "api.stripe.com/v1/payment_intents/{PAYMENT_INTENT ID}/capture",
            doc_link: "https://stripe.com/docs/api/payment_intents/capture",
            type: "POST",
            params: true,
        },
        cancel: {
            name: "Cancel",
            endpoint: "api.stripe.com/v1/payment_intents/{PAYMENT_INTENT ID}/cancel",
            doc_link: "https://stripe.com/docs/api/payment_intents/cancel",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/payment_intents",
            doc_link: "https://stripe.com/docs/api/payment_intents/list",
            type: "GET",
            params: true,
        },
    },
    
    setup_intents: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/setup_intents",
            doc_link: "https://stripe.com/docs/api/setup_intents/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/setup_intents/{SETUP_INTENT ID}",
            doc_link: "https://stripe.com/docs/api/setup_intents/retrieve",
            type: "GET",
            params: true
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/setup_intents/{SETUP_INTENT ID}",
            doc_link: "https://stripe.com/docs/api/setup_intents/update",
            type: "POST",
            params: true,
        },
        confirm: {
            name: "Confirm",
            endpoint: "api.stripe.com/v1/setup_intents/{SETUP_INTENT ID}/confirm",
            doc_link: "https://stripe.com/docs/api/setup_intents/confirm",
            type: "POST",
            params: true,
        },
        cancel: {
            name: "Cancel",
            endpoint: "api.stripe.com/v1/setup_intents/{SETUP_INTENT ID}/capture",
            doc_link: "https://stripe.com/docs/api/setup_intents/cancel",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/setup_intents",
            doc_link: "https://stripe.com/docs/api/setup_intents/list",
            type: "GET",
            params: true,
        },
    },
    
    payouts: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/payouts",
            doc_link: "https://stripe.com/docs/api#create_payout",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/payouts/{PAYOUT ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_payout",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/payouts/{PAYOUT ID}",
            doc_link: "https://stripe.com/docs/api#update_payout",
            type: "POST",
            params: true,
        },
        cancel: {
            name: "Cancel",
            endpoint: "api.stripe.com/v1/payouts/{PAYOUT ID}/cancel",
            doc_link: "https://stripe.com/docs/api#cancel_payout",
            type: "POST",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/payouts",
            doc_link: "https://stripe.com/docs/api#list_payouts",
            type: "GET",
            params: true,
        },
    },

    products: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/products",
            doc_link: "https://stripe.com/docs/api#create_product",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/products/{PRODUCT ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_product",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/products/{PRODUCT ID}",
            doc_link: "https://stripe.com/docs/api#update_product",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/products/{PRODUCT ID}",
            doc_link: "https://stripe.com/docs/api#delete_product",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/products",
            doc_link: "https://stripe.com/docs/api#list_products",
            type: "GET",
            params: true,
        },
    },

    refunds: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/refunds",
            doc_link: "https://stripe.com/docs/api#create_refund",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/refunds/{REFUND ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_refund",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/refunds/{REFUND ID}",
            doc_link: "https://stripe.com/docs/api#update_refund",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/refunds",
            doc_link: "https://stripe.com/docs/api#list_refunds",
            type: "GET",
            params: true,
        },
    },

    tokens: {
            create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/tokens",
            doc_link: "https://stripe.com/docs/api#create_card_token",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/tokens/{TOKEN ID}",
            doc_link: "https://stripe.com/docs/api/tokens/retrieve",
            type: "GET",
        },
    },
    
    payment_methods: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/payment_methods",
            doc_link: "https://stripe.com/docs/api/payment_methods/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/payment_methods/{PAYMENT_METHOD ID}",
            doc_link: "https://stripe.com/docs/api/payment_methods/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/payment_methods/{PAYMENT_METHOD ID}",
            doc_link: "https://stripe.com/docs/api/payment_methods/update",
            type: "POST",
            params: true,
        },
        attach: {
            name: "Attach",
            endpoint: "api.stripe.com/v1/payment_methods/{PAYMENT_METHOD ID}/attach",
            doc_link: "https://stripe.com/docs/api/payment_methods/attach",
            type: "POST",
            params: true
        },
        detach: {
            name: "Detach",
            endpoint: "api.stripe.com/v1/payment_methods/{PAYMENT_METHOD ID}/detach",
            doc_link: "https://stripe.com/docs/api/payment_methods/detach",
            type: "POST"
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/payment_methods",
            doc_link: "https://stripe.com/docs/api/payment_methods/list",
            type: "GET",
            params: true
        },
    },

    bank_accounts: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/sources",
            doc_link: "https://stripe.com/docs/api#customer_create_bank_account",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/sources/{BANK ID}",
            doc_link: "https://stripe.com/docs/api#customer_retrieve_bank_account",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/sources/{BANK ID}",
            doc_link: "https://stripe.com/docs/api#customer_update_bank_account",
            type: "POST",
            params: true,
        },
        verify: {
            name: "Verify",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/sources/{BANK ID}/verify",
            doc_link: "https://stripe.com/docs/api#customer_verify_bank_account",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/sources/{BANK ID}",
            doc_link: "https://stripe.com/docs/api#customer_delete_bank_account",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER_ID}/sources?object=bank_account",
            doc_link: "https://stripe.com/docs/api#customer_list_bank_accounts",
            type: "GET",
            params: true,
        },
    },

    cards: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/sources",
            doc_link: "https://stripe.com/docs/api#create_card",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/sources/{CARD ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_card",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/sources/{CARD ID}",
            doc_link: "https://stripe.com/docs/api#update_card",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/sources/{CARD ID}",
            doc_link: "https://stripe.com/docs/api#delete_card",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER_ID}/sources?object=card",
            doc_link: "https://stripe.com/docs/api#list_cards",
            type: "GET",
            params: true,
        },
    },

    sources: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/sources",
            doc_link: "https://stripe.com/docs/api#create_source",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/sources/{SOURCE ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_source",
            type: "GET",
            params: true,
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/sources/{SOURCE ID}",
            doc_link: "https://stripe.com/docs/api#update_source",
            type: "POST",
            params: true,
        },
        attach: {
            name: "Attach",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/sources",
            doc_link: "https://stripe.com/docs/api#attach_source",
            type: "POST",
            params: true,
        },
        detach: {
            name: "Detach",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/sources/{SOURCE ID}",
            doc_link: "https://stripe.com/docs/api#detach_source",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/sources",
            doc_link: "https://stripe.com/docs/api#list_source",
            type: "GET",
            params: true,
        },
    },
    
    checkout_sessions: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/checkout/sessions",
            doc_link: "https://stripe.com/docs/api/checkout/sessions/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/checkout/sessions/{CHECKOUT_SESSION ID}",
            doc_link: "https://stripe.com/docs/api/checkout/sessions/retrieve",
            type: "GET",
        },
    },

    coupons: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/coupons",
            doc_link: "https://stripe.com/docs/api#create_coupon",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/coupons/{COUPON ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_coupon",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/coupons/{COUPON ID}",
            doc_link: "https://stripe.com/docs/api#update_coupon",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/coupons/{COUPON ID}",
            doc_link: "https://stripe.com/docs/api#delete_coupon",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/coupons",
            doc_link: "https://stripe.com/docs/api#list_coupons",
            type: "GET",
            params: true,
        },
    },
    
    credit_notes: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/credit_notes",
            doc_link: "https://stripe.com/docs/api/credit_notes/create",
            type: "POST",
            params: true,
        },
        preview: {
            name: "Preview",
            endpoint: "api.stripe.com/v1/credit_notes/preview",
            doc_link: "https://stripe.com/docs/api/credit_notes/preview",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/credit_notes/{CREDIT_NOTE ID}",
            doc_link: "https://stripe.com/docs/api/credit_notes/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/credit_notes/{CREDIT_NOTE ID}",
            doc_link: "https://stripe.com/docs/api/credit_notes/update",
            type: "POST",
            params: true,
        },
        void: {
            name: "Void",
            endpoint: "api.stripe.com/v1/credit_notes/{CREDIT_NOTE ID}/void",
            doc_link: "https://stripe.com/docs/api/credit_notes/void",
            type: "POST",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/credit_notes",
            doc_link: "https://stripe.com/docs/api/credit_notes/list",
            type: "GET",
            params: true,
        },
    },
    
    customer_balance_transactions: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/balance_transactions",
            doc_link: "https://stripe.com/docs/api/customer_balance_transactions/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/balance_transactions/{CUSTOMER_BALANCE_TRANSACTION ID}",
            doc_link: "https://stripe.com/docs/api/customer_balance_transactions/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/balance_transactions/{CUSTOMER_BALANCE_TRANSACTION ID}",
            doc_link: "https://stripe.com/docs/api/customer_balance_transactions/update",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/balance_transactions",
            doc_link: "https://stripe.com/docs/api/customer_balance_transactions/list",
            type: "GET",
            params: true,
        },
    },
    
    customer_tax_ids: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/tax_ids",
            doc_link: "https://stripe.com/docs/api/customer_tax_ids/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/tax_ids/{TAX ID}",
            doc_link: "https://stripe.com/docs/api/customer_tax_ids/retrieve",
            type: "GET",
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/tax_ids/{TAX ID}",
            doc_link: "https://stripe.com/docs/api/customer_tax_ids/delete",
            type: "POST",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/tax_ids",
            doc_link: "https://stripe.com/docs/api/customer_tax_ids/list",
            type: "GET",
            params: true,
        },
    },

    discounts: {
        delete_customer: {
            name: "Delete Customer Discount",
            endpoint: "api.stripe.com/v1/customers/{CUSTOMER ID}/discount",
            doc_link: "https://stripe.com/docs/api#delete_discount",
            type: "DELETE",
        },
        delete_subscription: {
            name: "Delete Subscription Discount",
            endpoint: "api.stripe.com/v1/subscriptions/{SUBSCRIPTION ID}/discount",
            doc_link: "https://stripe.com/docs/api#delete_subscription_discount",
            type: "DELETE",
        },
    },

    invoices: {
        create: {
            name: "Create Draft",
            recommendedParams: null,
            endpoint: "api.stripe.com/v1/invoices",
            doc_link: "https://stripe.com/docs/api#create_invoice",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            recommendedParams: null,
            endpoint: "api.stripe.com/v1/invoices/{INVOICE ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_invoice",
            type: "GET",
        },
        update: {
            name: "Update",
            recommendedParams: null,
            endpoint: "api.stripe.com/v1/invoices/{INVOICE ID}",
            doc_link: "https://stripe.com/docs/api#update_invoice",
            type: "POST",
            params: true,
        },
        delete_draft: {
            name: "Delete Draft",
            recommendedParams: null,
            endpoint: "api.stripe.com/v1/invoices/{INVOICE ID}",
            doc_link: "https://stripe.com/docs/api/invoices/delete",
            type: "DELETE",

        },
        finalize_draft: {
            name: "Finalize Draft",
            recommendedParams: null,
            endpoint: "api.stripe.com/v1/invoices/{INVOICE ID}/finalize",
            doc_link: "https://stripe.com/docs/api/invoices/finalize",
            type: "POST",
            params: true,
        },
        send: {
            name: "Send",
            recommendedParams: null,
            endpoint: "api.stripe.com/v1/invoices/{INVOICE ID}/send",
            doc_link: "https://stripe.com/docs/api/invoices/send",
            type: "POST",

        },
        pay: {
            name: "Pay",
            recommendedParams: null,
            endpoint: "api.stripe.com/v1/invoices/{INVOICE ID}/pay",
            doc_link: "https://stripe.com/docs/api#pay_invoice",
            type: "POST",
            params: true,

        },
        void: {
            name: "Void",
            recommendedParams: null,
            endpoint: "api.stripe.com/v1/invoices/{INVOICE ID}/void",
            doc_link: "https://stripe.com/docs/api/invoices/void",
            type: "POST",

        },
        invoice_lines: {
            name: "Retrieve Invoice Line Items",
            endpoint: "api.stripe.com/v1/invoices/{INVOICE ID}/lines",
            doc_link: "https://stripe.com/docs/api#invoice_lines",
            type: "GET",
            params: true,

        },
        upcoming_invoice: {
            name: "Retrieve Upcoming Invoice",
            endpoint: "api.stripe.com/v1/invoices/upcoming",
            doc_link: "https://stripe.com/docs/api#upcoming_invoice",
            type: "GET",
            params: true,

        },
        upcoming_invoice_lines: {
            name: "Retrieve Upcoming Invoice Line Items",
            endpoint: "api.stripe.com/v1/invoices/upcoming/lines",
            doc_link: "https://stripe.com/docs/api#upcoming_invoice_lines",
            type: "GET",
            params: true,

        },
        list: {
            name: "List",
            recommendedParams: null,
            endpoint: "api.stripe.com/v1/invoices",
            doc_link: "https://stripe.com/docs/api#list_invoices",
            type: "GET",
            params: true,
        },
    },

    invoice_items: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/invoiceitems",
            doc_link: "https://stripe.com/docs/api#create_invoiceitem",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/invoiceitems/{INVOICEITEM ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_invoiceitem",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/invoiceitems/{INVOICEITEM ID}",
            doc_link: "https://stripe.com/docs/api#update_invoiceitem",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/invoiceitems/{INVOICEITEM ID}",
            doc_link: "https://stripe.com/docs/api#delete_invoiceitem",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/invoiceitems",
            doc_link: "https://stripe.com/docs/api#list_invoiceitems",
            type: "GET",
            params: true,
        },
    },

    subscription_products: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/products",
            doc_link: "https://stripe.com/docs/api#create_service_product",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/products/{PRODUCT ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_service_product",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/products/{PRODUCT ID}",
            doc_link: "https://stripe.com/docs/api#update_service_product",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/products/{PRODUCT ID}",
            doc_link: "https://stripe.com/docs/api#delete_service_product",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/products",
            doc_link: "https://stripe.com/docs/api#list_service_products",
            type: "GET",
            params: true,
        },
    },

    plans: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/plans",
            doc_link: "https://stripe.com/docs/api#create_plan",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/plans/{PLAN ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_plan",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/plans/{PLAN ID}",
            doc_link: "https://stripe.com/docs/api#update_plan",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/plans/{PLAN ID}",
            doc_link: "https://stripe.com/docs/api#delete_plan",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/plans",
            doc_link: "https://stripe.com/docs/api#list_plans",
            type: "GET",
            params: true,
        },
    },

    subscriptions: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/subscriptions",
            doc_link: "https://stripe.com/docs/api#create_subscription",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/subscriptions/{SUBSCRIPTION ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_subscription",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/subscriptions/{SUBSCRIPTION ID}",
            doc_link: "https://stripe.com/docs/api#update_subscription",
            type: "POST",
            params: true,
        },
        cancel: {
            name: "Cancel",
            endpoint: "api.stripe.com/v1/subscriptions/{SUBSCRIPTION ID}",
            doc_link: "https://stripe.com/docs/api#cancel_subscription",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/subscriptions",
            doc_link: "https://stripe.com/docs/api#list_subscriptions",
            type: "GET",
            params: true,
        },
    },

    subscription_items: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/subscription_items",
            doc_link: "https://stripe.com/docs/api#create_subscription_item",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/subscription_items/{SUBSCRIPTION ITEM ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_subscription_item",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/subscription_items/{SUBSCRIPTION ITEM ID}",
            doc_link: "https://stripe.com/docs/api#update_subscription_item",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/subscription_items/{SUBSCRIPTION ITEM ID}",
            doc_link: "https://stripe.com/docs/api#delete_subscription_item",
            type: "DELETE",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/subscription_items",
            doc_link: "https://stripe.com/docs/api#list_subscription_items",
            type: "GET",
            params: true,
        },
    },
    
    tax_rates: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/tax_rates",
            doc_link: "https://stripe.com/docs/api/tax_rates/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/tax_rates/{TAX_RATE ID}",
            doc_link: "https://stripe.com/docs/api/tax_rates/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/tax_rates/{TAX_RATE ID}",
            doc_link: "https://stripe.com/docs/api/tax_rates/update",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/tax_rates",
            doc_link: "https://stripe.com/docs/api/tax_rates/list",
            type: "GET",
            params: true,
        },
    },

    usage_records: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/subscription_items/{SUBSCRIPTION ITEM ID}/usage_record_summaries",
            doc_link: "https://stripe.com/docs/api#usage_record_create",
            type: "POST",
            params: true,
        },
        list: {
            name: "List Period Summaries",
            endpoint: "api.stripe.com/v1/subscription_items/{SUBSCRIPTION ITEM ID}/usage_records",
            doc_link: "https://stripe.com/docs/api/usage_records/subscription_item_summary_list",
            type: "GET",
            params: true,
        },
    },

    account: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/accounts",
            doc_link: "https://stripe.com/docs/api#create_account",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_account",
            type: "GET",
        },
        get_self: {
            name: "Retrieve (Self)",
            endpoint: "api.stripe.com/v1/account",
            doc_link: "https://stripe.com/docs/api#retrieve_account",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}",
            doc_link: "https://stripe.com/docs/api#update_account",
            type: "POST",
            params: true,
        },
        reject: {
            name: "Reject",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}",
            doc_link: "https://stripe.com/docs/api#reject_account",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}",
            doc_link: "https://stripe.com/docs/api#delete_account",
            type: "DELETE",
        },
        list: {
            name: "List Connected Accounts",
            endpoint: "api.stripe.com/v1/accounts",
            doc_link: "https://stripe.com/docs/api#list_accounts",
            type: "GET",
            params: true,
        },
        create_login_link: {
            name: "Create Login Link",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/login_links",
            doc_link: "https://stripe.com/docs/api#create_login_link",
            type: "POST",
            params: true,
        },
    },
    
    account_links: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/account_links",
            doc_link: "https://stripe.com/docs/api/account_links/create",
            type: "POST",
            params: true,
        },
    },
    
    application_fees: {
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/application_fees/{FEE ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_application_fee",
            type: "GET",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/application_fees",
            doc_link: "https://stripe.com/docs/api#list_application_fees",
            type: "GET",
            params: true,
        },
    },

    application_fee_refunds: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/application_fees/{FEE ID}/refunds",
            doc_link: "https://stripe.com/docs/api#create_fee_refund",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/application_fees/{FEE ID}/refunds/{FEE REFUND ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_fee_refund",
            type: "GET",
            params: true,
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/application_fees/{FEE ID}/refunds/{FEE REFUND ID}",
            doc_link: "https://stripe.com/docs/api#update_fee_refund",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/application_fees/{FEE ID}/refunds",
            doc_link: "https://stripe.com/docs/api#list_fee_refunds",
            type: "GET",
            params: true,
        },
    },
    
    capabilities: {
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/capabilities/{CAPABILITY ID}",
            doc_link: "https://stripe.com/docs/api/capabilities/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/capabilities/{CAPABILITY ID}",
            doc_link: "https://stripe.com/docs/api/capabilities/update",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/capabilities",
            doc_link: "https://stripe.com/docs/api/capabilities/list",
            type: "GET",
            params: true,
        },
    },

    

    country_specs: {
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/country_specs/{COUNTRY CODE}",
            doc_link: "https://stripe.com/docs/api#retrieve_country_spec",
            type: "GET",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/country_specs",
            doc_link: "https://stripe.com/docs/api#list_country_specs",
            type: "GET",
            params: true,
        },
    },

    external_accounts: {
        create_bank: {
            name: "Create Bank Account",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/external_accounts",
            doc_link: "https://stripe.com/docs/api#account_create_bank_account",
            type: "POST",
            params: true,
        },
        retrieve_bank: {
            name: "Retrieve Bank Account",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/external_accounts/{BANK ID}",
            doc_link: "https://stripe.com/docs/api#account_retrieve_bank_account",
            type: "GET",
        },
        update_bank: {
            name: "Update Bank Account",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/external_accounts/{BANK ID}",
            doc_link: "https://stripe.com/docs/api#account_update_bank_account",
            type: "POST",
            params: true,
        },
        delete_bank: {
            name: "Delete Bank Account",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/external_accounts/{BANK ID}",
            doc_link: "https://stripe.com/docs/api#account_delete_bank_account",
            type: "DELETE",
        },
        list_banks: {
            name: "List Bank Accounts",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/external_accounts?object=bank_account",
            doc_link: "https://stripe.com/docs/api#account_list_bank_accounts",
            type: "GET",
            params: true,

        },
        create_card: {
            name: "Create Card",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/external_accounts",
            doc_link: "https://stripe.com/docs/api#account_create_card",
            type: "POST",
            params: true,

        },
        retrieve_card: {
            name: "Retrieve Cards",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/external_accounts/{CARD ID}",
            doc_link: "https://stripe.com/docs/api#account_retrieve_card",
            type: "GET",

        },
        update_card: {
            name: "Update Card",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/external_accounts/{CARD ID}",
            doc_link: "https://stripe.com/docs/api#account_update_card",
            type: "POST",
            params: true,

        },
        delete_card: {
            name: "Delete Card",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/external_accounts/{CARD ID}",
            doc_link: "https://stripe.com/docs/api#account_delete_card",
            type: "DELETE",

        },
        list_cards: {
            name: "List Cards",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT_ID}/external_accounts?object=card",
            doc_link: "https://stripe.com/docs/api#account_list_cards",
            type: "GET",
            params: true,

        },
    },
    
    persons: {
            create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/persons",
            doc_link: "https://stripe.com/docs/api/persons/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/persons/{PERSON ID}",
            doc_link: "https://stripe.com/docs/api/persons/create",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/persons/{PERSON ID}",
            doc_link: "https://stripe.com/docs/api/persons/update",
            type: "POST",
            params: true,
        },
        Delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/persons/{PERSON ID}",
            doc_link: "https://stripe.com/docs/api/persons/delete",
            type: "DELETE"
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/accounts/{ACCOUNT ID}/persons",
            doc_link: "https://stripe.com/docs/api/persons/list",
            type: "GET",
            params: true,
        },
    },
    
    topups: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/topups",
            doc_link: "https://stripe.com/docs/api#create_topup",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/topups/{TOPUP ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_topup",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/topups/{TOPUP ID}",
            doc_link: "https://stripe.com/docs/api#update_topup",
            type: "POST",
            params: true,
        },
        cancel: {
            name: "Cancel",
            endpoint: "api.stripe.com/v1/topups/{TOPUP ID}/cancel",
            doc_link: "https://stripe.com/docs/api#cancel_topup",
            type: "POST"
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/topups",
            doc_link: "https://stripe.com/docs/api#list_topups",
            type: "GET",
            params: true,
        },
    },

    transfers: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/transfers",
            doc_link: "https://stripe.com/docs/api#create_transfer",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/transfers/{TRANSFER ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_transfer",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/transfers/{TRANSFER ID}",
            doc_link: "https://stripe.com/docs/api#update_transfer",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/transfers",
            doc_link: "https://stripe.com/docs/api#list_transfers",
            type: "GET",
            params: true,
        },
    },

    transfer_reversals: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/transfers/{TRANSFER ID}/reversals",
            doc_link: "https://stripe.com/docs/api#create_transfer_reversal",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/transfers/{TRANSFER ID}/reversals/{REVERSAL ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_transfer_reversal",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/transfers/{TRANSFER ID}/reversals/{REVERSAL ID}",
            doc_link: "https://stripe.com/docs/api#update_transfer_reversal",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/transfers/{TRANSFER ID}/reversals",
            doc_link: "https://stripe.com/docs/api#list_transfer_reversals",
            type: "GET",
            params: true,
        },
    },
    
    early_fraud_warnings: {
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/radar/early_fraud_warnings/{FRAUD_WARNING ID}",
            doc_link: "https://stripe.com/docs/api/radar/early_fraud_warnings/retrieve",
            type: "GET",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/radar/early_fraud_warnings",
            doc_link: "https://stripe.com/docs/api/radar/early_fraud_warnings/list",
            type: "GET",
            params: true,
        },
    },
    
    fraud_reviews: {
            approve: {
            name: "Approve",
            endpoint: "api.stripe.com/v1/reviews/{FRAUD_REVIEW ID}/approve",
            doc_link: "https://stripe.com/docs/api/radar/reviews/approve",
            type: "POST",
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/reviews/{FRAUD_REVIEW ID}",
            doc_link: "https://stripe.com/docs/api/radar/reviews/retrieve",
            type: "GET",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/reviews",
            doc_link: "https://stripe.com/docs/api/radar/reviews/list",
            type: "GET",
            params: true,
        },
    },
    
    fraud_value_lists: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/radar/value_lists",
            doc_link: "https://stripe.com/docs/api/radar/value_lists/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/radar/value_lists/{FRAUD_VALUE_LIST ID}",
            doc_link: "https://stripe.com/docs/api/radar/value_lists/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/radar/value_lists/{FRAUD_VALUE_LIST ID}",
            doc_link: "https://stripe.com/docs/api/radar/value_lists/update",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/radar/value_lists/{FRAUD_VALUE_LIST ID}",
            doc_link: "https://stripe.com/docs/api/radar/value_lists/delete",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/radar/value_lists",
            doc_link: "https://stripe.com/docs/api/radar/value_lists/list",
            type: "GET",
            params: true,
        },
    },
    
    fraud_value_list_items: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/radar/value_list_items",
            doc_link: "https://stripe.com/docs/api/radar/value_list_items/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/radar/value_lists/{FRAUD_VALUE_LIST_ITEM ID}",
            doc_link: "https://stripe.com/docs/api/radar/value_list_items/retrieve",
            type: "GET",
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/radar/value_list_items/{FRAUD_VALUE_LIST_ITEM ID}",
            doc_link: "https://stripe.com/docs/api/radar/value_list_items/delete",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/radar/value_list_items",
            doc_link: "https://stripe.com/docs/api/radar/value_list_items/list",
            type: "GET",
            params: true,
        },
    },
    
    issuing_authorizations: {
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/issuing/authorizations/{ISSUING_AUTHORIZATION ID}",
            doc_link: "https://stripe.com/docs/api/issuing/authorizations/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/issuing/authorizations/{ISSUING_AUTHORIZATION ID}",
            doc_link: "https://stripe.com/docs/api/issuing/authorizations/update",
            type: "POST",
            params: true,
        },
        approve: {
            name: "Approve",
            endpoint: "api.stripe.com/v1/issuing/authorizations/{ISSUING_AUTHORIZATION ID}/approve",
            doc_link: "https://stripe.com/docs/api/issuing/authorizations/approve",
            type: "POST",
            params: true,
        },
        decline: {
            name: "Decline",
            endpoint: "api.stripe.com/v1/issuing/authorizations/{ISSUING_AUTHORIZATION ID}/decline",
            doc_link: "https://stripe.com/docs/api/issuing/authorizations/decline",
            type: "POST",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/issuing/authorizations",
            doc_link: "https://stripe.com/docs/api/issuing/authorizations/list",
            type: "GET",
            params: true,
        },
    },
    
    issuing_cardholders: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/issuing/cardholders",
            doc_link: "https://stripe.com/docs/api/issuing/cardholders/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/issuing/cardholders/{ISSUING_CARDHOLDER ID}",
            doc_link: "https://stripe.com/docs/api/issuing/cardholders/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/issuing/cardholders/{ISSUING_CARDHOLDER ID}",
            doc_link: "https://stripe.com/docs/api/issuing/cardholders/update",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/issuing/cardholders",
            doc_link: "https://stripe.com/docs/api/issuing/cardholders/list",
            type: "GET",
            params: true,
        },
    },
    
    issuing_cards: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/issuing/cards",
            doc_link: "https://stripe.com/docs/api/issuing/cards/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/issuing/cards/{ISSUING_CARD ID}",
            doc_link: "https://stripe.com/docs/api/issuing/cards/retrieve",
            type: "GET",
        },
        retrieve_card_detals: {
            name: "Retrieve Details",
            endpoint: "api.stripe.com/v1/issuing/cards/{ISSUING_CARD ID}/details",
            doc_link: "https://stripe.com/docs/api/issuing/cards/retrieve_details",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/issuing/cards/{ISSUING_CARD ID}",
            doc_link: "https://stripe.com/docs/api/issuing/cards/update",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/issuing/cards",
            doc_link: "https://stripe.com/docs/api/issuing/cards/list",
            type: "GET",
            params: true,
        },
    },
    
    issuing_disputes: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/issuing/disputes",
            doc_link: "https://stripe.com/docs/api/issuing/disputes/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/issuing/disputes/{ISSUING_DISPUTE ID}",
            doc_link: "https://stripe.com/docs/api/issuing/disputes/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/issuing/disputes/{ISSUING_DISPUTE ID}",
            doc_link: "https://stripe.com/docs/api/issuing/disputes/update",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/issuing/disputes",
            doc_link: "https://stripe.com/docs/api/issuing/disputes/list",
            type: "GET",
            params: true,
        },
    },
    
    issuing_transactions: {
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/issuing/transactions/{ISSUING_TRANSACTION ID}",
            doc_link: "https://stripe.com/docs/api/issuing/transactions/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/issuing/transactions/{ISSUING_TRANSACTION ID}",
            doc_link: "https://stripe.com/docs/api/issuing/transactions/update",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/issuing/transactions",
            doc_link: "https://stripe.com/docs/api/issuing/transactions/list",
            type: "GET",
            params: true,
        },
    },
    
    terminal_connection_tokens: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/terminal/connection_tokens",
            doc_link: "https://stripe.com/docs/api/terminal/connection_tokens/create",
            type: "POST",
            params: true,
        },
    },

        terminal_locations: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/terminal/locations",
            doc_link: "https://stripe.com/docs/api/terminal/locations/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/terminal/locations/{TERMINAL_LOCATION ID}",
            doc_link: "https://stripe.com/docs/api/terminal/locations/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/terminal/locations/{TERMINAL_LOCATION ID}",
            doc_link: "https://stripe.com/docs/api/terminal/locations/update",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/terminal/locations/{TERMINAL_LOCATION ID}",
            doc_link: "https://stripe.com/docs/api/terminal/locations/delete",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/terminal/locations",
            doc_link: "https://stripe.com/docs/api/terminal/locations/list",
            type: "GET",
            params: true,
        },
    },
    
    terminal_readers: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/terminal/readers",
            doc_link: "https://stripe.com/docs/api/terminal/readers/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/terminal/readers/{TERMINAL_READER ID}",
            doc_link: "https://stripe.com/docs/api/terminal/readers/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/terminal/readers/{TERMINAL_READER ID}",
            doc_link: "https://stripe.com/docs/api/terminal/readers/update",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/terminal/readers/{TERMINAL_READER ID}",
            doc_link: "https://stripe.com/docs/api/terminal/readers/delete",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/terminal/readers",
            doc_link: "https://stripe.com/docs/api/terminal/readers/list",
            type: "GET",
            params: true,
        },
    },

    orders: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/orders",
            doc_link: "https://stripe.com/docs/api#create_order",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/orders/{ORDER ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_order",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/orders/{ORDER ID}",
            doc_link: "https://stripe.com/docs/api#update_order",
            type: "POST",
            params: true,
        },
        pay: {
            name: "Pay",
            endpoint: "api.stripe.com/v1/orders/{ORDER ID}/pay",
            doc_link: "https://stripe.com/docs/api#pay_order",
            type: "POST",
            params: true,
        },
        return: {
            name: "Return",
            endpoint: "api.stripe.com/v1/orders/{ORDER ID}/returns",
            doc_link: "https://stripe.com/docs/api#return_order",
            type: "POST",
            params: true,
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/orders",
            doc_link: "https://stripe.com/docs/api#list_orders",
            type: "GET",
            params: true,
        },
    },

    order_returns: {
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/order_returns/{RETURN ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_order_return",
            type: "GET",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/order_returns",
            doc_link: "https://stripe.com/docs/api#list_order_returns",
            type: "GET",
            params: true,
        },
    },

    skus: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/skus",
            doc_link: "https://stripe.com/docs/api#create_sku",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/skus/{SKU ID}",
            doc_link: "https://stripe.com/docs/api#retrieve_sku",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/skus/{SKU ID}",
            doc_link: "https://stripe.com/docs/api#update_sku",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/skus/{SKU ID}",
            doc_link: "https://stripe.com/docs/api#delete_sku",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/skus",
            doc_link: "https://stripe.com/docs/api#list_skus",
            type: "GET",
            params: true,
        },
    },
    
    scheduled_queries: {
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/sigma/scheduled_query_runs/{SIGMA_QUERY ID}",
            doc_link: "https://stripe.com/docs/api/sigma/scheduled_queries/retrieve",
            type: "GET",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/sigma/scheduled_query_runs",
            doc_link: "https://stripe.com/docs/api/sigma/scheduled_queries/list",
            type: "GET",
            params: true,
        },
    },

        webhook_endpoints: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/webhook_endpoints",
            doc_link: "https://stripe.com/docs/api/webhook_endpoints/create",
            type: "POST",
            params: true,
        },
        retrieve: {
            name: "Retrieve",
            endpoint: "api.stripe.com/v1/webhook_endpoints/{WEBHOOK_ENDPOINT ID}",
            doc_link: "https://stripe.com/docs/api/webhook_endpoints/retrieve",
            type: "GET",
        },
        update: {
            name: "Update",
            endpoint: "api.stripe.com/v1/webhook_endpoints/{WEBHOOK_ENDPOINT  ID}",
            doc_link: "https://stripe.com/docs/api/webhook_endpoints/update",
            type: "POST",
            params: true,
        },
        delete: {
            name: "Delete",
            endpoint: "api.stripe.com/v1/webhook_endpoints/{WEBHOOK_ENDPOINT  ID}",
            doc_link: "https://stripe.com/docs/api/webhook_endpoints/update",
            type: "DELETE",
        },
        list: {
            name: "List",
            endpoint: "api.stripe.com/v1/webhook_endpoints",
            doc_link: "https://stripe.com/docs/api/webhook_endpoints/list",
            type: "GET",
            params: true,
        },
    },

};



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

  endpointContainer = document.getElementById("endpoint-container");
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
}