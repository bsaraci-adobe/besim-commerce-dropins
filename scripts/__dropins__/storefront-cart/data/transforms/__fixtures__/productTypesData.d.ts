declare const bundleOptions: {
    __typename: string;
    bundle_options: {
        uid: string;
        label: string;
        values: {
            uid: string;
            label: string;
            quantity: number;
            price: number;
        }[];
    }[];
    uid: string;
    quantity: number;
    errors: null;
    prices: {
        price: {
            value: number;
            currency: string;
        };
        total_item_discount: {
            value: number;
            currency: string;
        };
        row_total: {
            value: number;
            currency: string;
        };
        price_including_tax: {
            value: number;
            currency: string;
        };
        row_total_including_tax: {
            value: number;
        };
        original_row_total: {
            value: number;
            currency: string;
        };
    };
    product: {
        name: string;
        sku: string;
        thumbnail: {
            url: string;
            label: string;
        };
        url_key: string;
        url_suffix: string;
        categories: {
            url_path: string;
            url_key: string;
        }[];
        price_range: {
            maximum_price: {
                regular_price: {
                    value: number;
                    currency: string;
                };
                final_price: {
                    value: number;
                    currency: string;
                };
                discount: {
                    amount_off: number;
                    percent_off: number;
                };
            };
        };
    };
};
declare const bundleOptionsEmpty: {
    __typename: string;
    bundle_options: never[];
    uid: string;
    quantity: number;
    errors: null;
    prices: {
        price: {
            value: number;
            currency: string;
        };
        total_item_discount: {
            value: number;
            currency: string;
        };
        row_total: {
            value: number;
            currency: string;
        };
        price_including_tax: {
            value: number;
            currency: string;
        };
        row_total_including_tax: {
            value: number;
        };
        original_row_total: {
            value: number;
            currency: string;
        };
    };
    product: {
        name: string;
        sku: string;
        thumbnail: {
            url: string;
            label: string;
        };
        url_key: string;
        url_suffix: string;
        categories: {
            url_path: string;
            url_key: string;
        }[];
        price_range: {
            maximum_price: {
                regular_price: {
                    value: number;
                    currency: string;
                };
                final_price: {
                    value: number;
                    currency: string;
                };
                discount: {
                    amount_off: number;
                    percent_off: number;
                };
            };
        };
    };
};
declare const giftCardPhysical: {
    __typename: string;
    message: string;
    recipient_name: string;
    sender_name: string;
    uid: string;
    quantity: number;
    errors: null;
    prices: {
        price: {
            value: number;
            currency: string;
        };
        total_item_discount: {
            value: number;
            currency: string;
        };
        row_total: {
            value: number;
            currency: string;
        };
        price_including_tax: {
            value: number;
            currency: string;
        };
        row_total_including_tax: {
            value: number;
        };
        original_row_total: {
            value: number;
            currency: string;
        };
    };
    product: {
        name: string;
        sku: string;
        thumbnail: {
            url: string;
            label: string;
        };
        url_key: string;
        url_suffix: string;
        categories: {
            url_path: string;
            url_key: string;
        }[];
        price_range: {
            maximum_price: {
                regular_price: {
                    value: number;
                    currency: string;
                };
                final_price: {
                    value: number;
                    currency: string;
                };
                discount: {
                    amount_off: number;
                    percent_off: number;
                };
            };
        };
    };
};
declare const giftCardVirtual: {
    message: string;
    recipient_email: string;
    sender_email: string;
    __typename: string;
    recipient_name: string;
    sender_name: string;
    uid: string;
    quantity: number;
    errors: null;
    prices: {
        price: {
            value: number;
            currency: string;
        };
        total_item_discount: {
            value: number;
            currency: string;
        };
        row_total: {
            value: number;
            currency: string;
        };
        price_including_tax: {
            value: number;
            currency: string;
        };
        row_total_including_tax: {
            value: number;
        };
        original_row_total: {
            value: number;
            currency: string;
        };
    };
    product: {
        name: string;
        sku: string;
        thumbnail: {
            url: string;
            label: string;
        };
        url_key: string;
        url_suffix: string;
        categories: {
            url_path: string;
            url_key: string;
        }[];
        price_range: {
            maximum_price: {
                regular_price: {
                    value: number;
                    currency: string;
                };
                final_price: {
                    value: number;
                    currency: string;
                };
                discount: {
                    amount_off: number;
                    percent_off: number;
                };
            };
        };
    };
};
declare const simple: {
    uid: string;
    quantity: number;
    errors: null;
    prices: {
        price: {
            value: number;
            currency: string;
        };
        total_item_discount: {
            value: number;
            currency: string;
        };
        row_total: {
            value: number;
            currency: string;
        };
        price_including_tax: {
            value: number;
            currency: string;
        };
        row_total_including_tax: {
            value: number;
        };
        original_row_total: {
            value: number;
            currency: string;
        };
    };
    product: {
        name: string;
        sku: string;
        thumbnail: {
            url: string;
            label: string;
        };
        url_key: string;
        url_suffix: string;
        categories: {
            url_path: string;
            url_key: string;
        }[];
        price_range: {
            maximum_price: {
                regular_price: {
                    value: number;
                    currency: string;
                };
                final_price: {
                    value: number;
                    currency: string;
                };
                discount: {
                    amount_off: number;
                    percent_off: number;
                };
            };
        };
    };
};
declare const simpleCustomizable: {
    __typename: string;
    customizable_options: {
        type: string;
        customizable_option_uid: string;
        label: string;
        values: {
            customizable_option_value_uid: string;
            label: string;
            value: string;
        }[];
    }[];
    uid: string;
    quantity: number;
    errors: null;
    prices: {
        price: {
            value: number;
            currency: string;
        };
        total_item_discount: {
            value: number;
            currency: string;
        };
        row_total: {
            value: number;
            currency: string;
        };
        price_including_tax: {
            value: number;
            currency: string;
        };
        row_total_including_tax: {
            value: number;
        };
        original_row_total: {
            value: number;
            currency: string;
        };
    };
    product: {
        name: string;
        sku: string;
        thumbnail: {
            url: string;
            label: string;
        };
        url_key: string;
        url_suffix: string;
        categories: {
            url_path: string;
            url_key: string;
        }[];
        price_range: {
            maximum_price: {
                regular_price: {
                    value: number;
                    currency: string;
                };
                final_price: {
                    value: number;
                    currency: string;
                };
                discount: {
                    amount_off: number;
                    percent_off: number;
                };
            };
        };
    };
};
declare const configurable: {
    __typename: string;
    configurable_options: {
        configurable_product_option_uid: string;
        option_label: string;
        value_label: string;
    }[];
    configured_variant: {
        uid: string;
        thumbnail: {
            label: string;
            url: string;
        };
        price_range: {
            maximum_price: {
                regular_price: {
                    value: number;
                    currency: string;
                };
                final_price: {
                    value: number;
                    currency: string;
                };
                discount: {
                    amount_off: number;
                    percent_off: number;
                };
            };
        };
    };
    uid: string;
    quantity: number;
    errors: null;
    prices: {
        price: {
            value: number;
            currency: string;
        };
        total_item_discount: {
            value: number;
            currency: string;
        };
        row_total: {
            value: number;
            currency: string;
        };
        price_including_tax: {
            value: number;
            currency: string;
        };
        row_total_including_tax: {
            value: number;
        };
        original_row_total: {
            value: number;
            currency: string;
        };
    };
    product: {
        name: string;
        sku: string;
        thumbnail: {
            url: string;
            label: string;
        };
        url_key: string;
        url_suffix: string;
        categories: {
            url_path: string;
            url_key: string;
        }[];
        price_range: {
            maximum_price: {
                regular_price: {
                    value: number;
                    currency: string;
                };
                final_price: {
                    value: number;
                    currency: string;
                };
                discount: {
                    amount_off: number;
                    percent_off: number;
                };
            };
        };
    };
};
declare const configurableCustomizable: {
    customizable_options: {
        type: string;
        customizable_option_uid: string;
        label: string;
        values: {
            customizable_option_value_uid: string;
            label: string;
            value: string;
        }[];
    }[];
    __typename: string;
    configurable_options: {
        configurable_product_option_uid: string;
        option_label: string;
        value_label: string;
    }[];
    configured_variant: {
        uid: string;
        thumbnail: {
            label: string;
            url: string;
        };
        price_range: {
            maximum_price: {
                regular_price: {
                    value: number;
                    currency: string;
                };
                final_price: {
                    value: number;
                    currency: string;
                };
                discount: {
                    amount_off: number;
                    percent_off: number;
                };
            };
        };
    };
    uid: string;
    quantity: number;
    errors: null;
    prices: {
        price: {
            value: number;
            currency: string;
        };
        total_item_discount: {
            value: number;
            currency: string;
        };
        row_total: {
            value: number;
            currency: string;
        };
        price_including_tax: {
            value: number;
            currency: string;
        };
        row_total_including_tax: {
            value: number;
        };
        original_row_total: {
            value: number;
            currency: string;
        };
    };
    product: {
        name: string;
        sku: string;
        thumbnail: {
            url: string;
            label: string;
        };
        url_key: string;
        url_suffix: string;
        categories: {
            url_path: string;
            url_key: string;
        }[];
        price_range: {
            maximum_price: {
                regular_price: {
                    value: number;
                    currency: string;
                };
                final_price: {
                    value: number;
                    currency: string;
                };
                discount: {
                    amount_off: number;
                    percent_off: number;
                };
            };
        };
    };
};
declare const giftCard: {
    __typename: string;
    uid: string;
    quantity: number;
    errors: null;
    prices: {
        price: {
            value: number;
            currency: string;
        };
        total_item_discount: {
            value: number;
            currency: string;
        };
        row_total: {
            value: number;
            currency: string;
        };
        price_including_tax: {
            value: number;
            currency: string;
        };
        row_total_including_tax: {
            value: number;
        };
        original_row_total: {
            value: number;
            currency: string;
        };
    };
    product: {
        name: string;
        sku: string;
        thumbnail: {
            url: string;
            label: string;
        };
        url_key: string;
        url_suffix: string;
        categories: {
            url_path: string;
            url_key: string;
        }[];
        price_range: {
            maximum_price: {
                regular_price: {
                    value: number;
                    currency: string;
                };
                final_price: {
                    value: number;
                    currency: string;
                };
                discount: {
                    amount_off: number;
                    percent_off: number;
                };
            };
        };
    };
};
declare const downloadbleWithMultipleLinks: {
    __typename: string;
    links: {
        title: string;
        url: string;
    }[];
    uid: string;
    quantity: number;
    errors: null;
    prices: {
        price: {
            value: number;
            currency: string;
        };
        total_item_discount: {
            value: number;
            currency: string;
        };
        row_total: {
            value: number;
            currency: string;
        };
        price_including_tax: {
            value: number;
            currency: string;
        };
        row_total_including_tax: {
            value: number;
        };
        original_row_total: {
            value: number;
            currency: string;
        };
    };
    product: {
        name: string;
        sku: string;
        thumbnail: {
            url: string;
            label: string;
        };
        url_key: string;
        url_suffix: string;
        categories: {
            url_path: string;
            url_key: string;
        }[];
        price_range: {
            maximum_price: {
                regular_price: {
                    value: number;
                    currency: string;
                };
                final_price: {
                    value: number;
                    currency: string;
                };
                discount: {
                    amount_off: number;
                    percent_off: number;
                };
            };
        };
    };
};
export { bundleOptions, bundleOptionsEmpty, giftCardPhysical, giftCardVirtual, simple, simpleCustomizable, configurable, configurableCustomizable, giftCard, downloadbleWithMultipleLinks, };
//# sourceMappingURL=productTypesData.d.ts.map