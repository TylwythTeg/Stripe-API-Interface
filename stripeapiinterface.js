var templates = {
    charges: {
        "Standard Charge": {
            method: "create",
            data: '{"amount":10000,"currency":"usd","source":"tok_visa"}'
        },
        "Direct Charge": {
            auth_as: true,
            method: "create",
            data: '{"amount":10000,"currency":"usd","source":"tok_visa","application_fee":1000}'
        },
        "Destination Charge": {
            method: "create",
            data: '{ "amount": 10000, "currency": "usd", "source": "tok_visa", "destination": { "amount": 10000, "account": "acct_*************" } }'
        },
        "SCT Charge (on_behalf_of)": {
            method: "create",
            data: '{"amount":10000,"currency":"usd","source":"tok_visa", "on_behalf_of": "acct_*************" }',
        },
        "Account Debit": {
            method: "create",
            data: '{ "amount": 10000, "currency": "usd", "source": "acct_*************" }',
        },

    },

    customers: {
        "Create Customer": {
            method: "create",
            data: '{ "source": "tok_visa", "email": "test@customer.com" }',
        },
        "Create Customer (With Metadata)": {
            method: "create",
            data: '{ "source": "tok_visa", "email": "test@customer.com", "metadata": { "preferred_customer": true, "favorite_letter": "a" } }',
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

    file_uploads: {
        "Upload Identity Document": {
            method: "create",
            data: '{ "purpose": "identity_document" }',
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
        "Direct Charge Refund (refund_application_fee)": {
            auth_as: true,
            method: "create",
            data: '{ "charge": "ch_*************", "refund_application_fee": true }',
        },
        "Destination Charge Refund (reverse_transfer)": {
            method: "create",
            data: '{ "charge": "ch_*************", "reverse_transfer": true }',
        },
    },

    tokens: {
        "Create Card Token": {
            method: "create_card",
            data: '{ "card": { "number": "4242424242424242", "exp_month": 12, "exp_year": 2022, "cvc": "123" } }',
        },
        "Create Bank Token": {
            method: "create_bank",
            data: '{ "bank_account": { "country": "US", "currency": "usd", "account_holder_name": "Liam Jackson", "account_holder_type": "individual", "routing_number": "110000000", "account_number": "000123456789" } }',
        },
        "Create PII Token": {
            method: "create_pii",
            data: '{ "pii": { "personal_id_number": "000000000" } }',
        },
        "Create Account Token": {
            method: "create_account",
            data: '{ "account": { "legal_entity": { "first_name": "Jane", "last_name": "Doe" }, "tos_shown_and_accepted": true } }',
        },
        "Create Shared Token (Connect)": {
            auth_as: true,
            method: "create_shared_token",
            data: '{"customer": "cus_*************"}',
        },

    },

    bank_accounts: {
        "Create From Token": {
            method: "create",
            data: '{ "source": "tok_*************" }',
        },
        "Create From Dictionary": {
            method: "create",
            data: '{ "source": { "object": "bank_account", "country": "US", "currency": "usd", "account_holder_name": "Liam Jackson", "account_holder_type": "individual", "routing_number": "110000000", "account_number": "000123456789" } }',
        },
        "Verify Manually": {
            method: "verify",
            data: '{ "amounts": [ 23, 45 ] }',
        },
    },

    cards: {
        "Create From Token": {
            method: "create",
            data: '{ "source": "tok_*************" }',
        },
        "Create From Dictionary": {
            method: "create",
            data: '{ "source": { "object": "card", "number": "4242424242424242", "exp_month": 12, "exp_year": 2022, "cvc": "123" } }',
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
        
        

        "Attach Source to Customer": {
            method: "attach",
            data: '{ "source": "src_*************" }'
        },
        
        "Update ACH Credit Source Balance": {
            method: "update",
            data: '{ "owner": { "email": "amount_1000@example.com" } }'

        },

    },

    invoices: {
        "Send Invoice": {
            method: "create",
            data: '{ "customer": "cus_*************", "billing": "send_invoice", "days_until_due": 30 }',
        },

        "Invoice (Charge Automatically)": {
            method: "create",
            data: '{ "customer": "cus_*************", "billing": "charge_automatically" }',
        },
        "Retrieve Upcoming Invoice": {
            method: "upcoming_invoice",
            data: '{ "customer": "cus_*************" }',
        },

    },

    invoice_items: {
        "Create Invoice Item": {
            method: "create",
            data: '{ "amount": 1000, "currency": "usd", "customer": "cus_*************", "description": "One-time setup fee" }',
        },


    },

    subscription_products: {
        "Create Product (Subscription)": {
            method: "create",
            data: '{ "name": "My SaaS Platform", "type": "service" }',
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
    },

    subscriptions: {
        "Create Subscription": {
            method: 'create',
            data: '{ "customer": "cus_*************", "plan": "plan_*************" }',
        },
        "Update Subscription Quantity (One Plan)": {
            method: "update",
            data: '{ "quantity": 1 }',
        }
    },

    subscription_items: {
        "Update Subscription Item Quantity": {
            method: "update",
            data: '{ "quantity": 1 }',
        }

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
        },
        retrieve_transaction: {
            name: "Retrieve Balance Transaction",
            endpoint: "api.stripe.com/v1/balance/history/{TRANSACTION ID}",
            doc_link: "https://stripe.com/docs/api#balance_transaction_retrieve",
            type: "GET",
        },
        list: {
            name: "List Balance History",
            endpoint: "api.stripe.com/v1/balance/history",
            doc_link: "https://stripe.com/docs/api#balance_history",
            type: "GET",
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
            endpoint: "api.stripe.com/v1/charges/{CUSTOMER ID}",
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

    file_uploads: {
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
        create_card: {
            name: "Create Card Token",
            endpoint: "api.stripe.com/v1/tokens",
            doc_link: "https://stripe.com/docs/api#create_card_token",
            type: "POST",
            params: true,
        },
        create_bank: {
            name: "Create Bank Token",
            endpoint: "api.stripe.com/v1/tokens",
            doc_link: "https://stripe.com/docs/api#create_bank_account_token",
            type: "POST",
            params: true,
        },
        create_pii: {
            name: "Create PII Token",
            endpoint: "api.stripe.com/v1/tokens",
            doc_link: "https://stripe.com/docs/api#create_pii_token",
            type: "POST",
            params: true,
        },
        create_account: {
            name: "Create Account Token",
            endpoint: "api.stripe.com/v1/tokens",
            doc_link: "https://stripe.com/docs/api#create_account_token",
            type: "POST",
            params: true,
        },
        create_shared_token: {
            name: "Create Shared Token",
            endpoint: "api.stripe.com/v1/tokens",
            doc_link: "https://stripe.com/docs/connect/shared-customers#making-tokens",
            type: "POST",
            params: true,
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
            name: "Create",
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
        pay: {
            name: "Pay",
            recommendedParams: null,
            endpoint: "api.stripe.com/v1/invoices/{INVOICE ID}/pay",
            doc_link: "https://stripe.com/docs/api#pay_invoice",
            type: "POST",
            params: true,

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

    usage_records: {
        create: {
            name: "Create",
            endpoint: "api.stripe.com/v1/subscription_items/{SUBSCRIPTION ITEM ID}/usage_records",
            doc_link: "https://stripe.com/docs/api#usage_record_create",
            type: "POST",
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
            endpoint: "https://api.stripe.com/v1/application_fees/{FEE ID}/refunds",
            doc_link: "https://stripe.com/docs/api#list_fee_refunds",
            type: "GET",
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
            endpoint: "api.stripe.com/v1/transfers/{TRANSFER ID}/reversal",
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




};









window.onload = function() {
		runApiInterface();
};

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

      populateMethodSelection(apiResources[selection], resource);
      updateEndpointContainer(endpointContainer, apiObjects.value, apiMethods.value);
      updateRequestArea(requestContainer, apiObjects.value, apiMethods.value);
      updateLink(docLink, apiObjects.value, apiMethods.value);
      updateTemplateSelection();
  });


  var uploadContainer = document.getElementById("upload-container");

  function updateRequestArea(textArea, apiObject, apiMethod) {
      var resource = apiResources[apiObject][apiMethod];
      
      /* Show / Hide JSON Request Area */
      var toggle = resource.params ? "remove" : "add";
      textArea.classList[toggle]("removed");

      /* Clear the request data */
      requestData.value = "{\n\n\n\n\n\n\n\n\n\n}";

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

  endpointContainer = document.getElementById("endpoint-container");
  apiMethods.addEventListener("change", function(event) {
      updateEndpointContainer(endpointContainer, apiObjects.value, apiMethods.value);
      updateRequestArea(requestContainer, apiObjects.value, apiMethods.value);
      updateLink(docLink, apiObjects.value, apiMethods.value);
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
      console.log(newEndpoint);
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

  tabSelection.addEventListener("click", function(event) {

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
          //console.log(id);
          el.classList.remove("active");
      }

      var newTabContent = document.getElementById(identifier);

      /* set to active */
      selectedTab.classList.add("active");
      newTabContent.classList.add("active");




  });




  /* Build out the templates */
  var templateContainer = document.getElementsByClassName("templates_container")[0];
  var listContainer = document.getElementsByClassName("templates_list")[0];


  var templateSelections = document.getElementsByClassName("template_objects")[0];

  templateSelections.addEventListener("change", function(e) {
      /* clear */
      listContainer.innerHTML = "";
      
      var resourceKey = templateSelections.value;
      var directory = templates[templateSelections.value];

      var keys = Object.keys(directory);
      for (var i = 0; i < keys.length; i++) {
          var el = document.createElement("a");
          el.textContent = keys[i];
          var resource = directory[keys[i]];
          listContainer.appendChild(el);
      }

  });

  var toolButton = document.getElementById("tool-button");
  listContainer.addEventListener("click", function(event) {

      if (event.target.parentElement !== listContainer) {
          return;
      }

      var link = event.target;

      /* Get Template */
      var dict = templates[templateSelections.value];
      var template = dict[link.textContent];

      /* Make presets happen */
      checkbox.checked = template.auth_as ? true : false;
      checkbox.dispatchEvent(new Event('change'));

      apiObjects.value = templateSelections.value;
      apiObjects.dispatchEvent(new Event('change'));

      apiMethods.value = template.method;
      apiMethods.dispatchEvent(new Event('change'));

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
      
      

      /* Switch to tool tab */
      toolButton.click();

  });




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
      templateSelections.value = apiObjects.value;
      templateSelections.dispatchEvent(new Event('change'));
  }

	/* Force the first template list to generate */
  function initTemplateList() {
      templateSelections.dispatchEvent(new Event("change"));
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