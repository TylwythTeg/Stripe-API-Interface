export const API_RESOURCES = {
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