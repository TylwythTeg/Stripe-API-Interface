export const templates = {

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