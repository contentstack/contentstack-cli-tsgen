const mock_data = {
  __schema: {
    queryType: {
      name: "Query",
    },
    mutationType: null,
    subscriptionType: null,
    types: [
      {
        kind: "OBJECT",
        name: "Query",
        description: null,
        fields: [
          {
            name: "assets",
            description: null,
            args: [
              {
                name: "uid",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "SCALAR",
                    name: "String",
                    ofType: null,
                  },
                },
                defaultValue: null,
              },
              {
                name: "locale",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
                defaultValue: "\"en-us\"",
              },
            ],
            type: {
              kind: "OBJECT",
              name: "SysAsset",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "all_assets",
            description: null,
            args: [
              {
                name: "where",
                description: null,
                type: {
                  kind: "INPUT_OBJECT",
                  name: "SysAssetWhere",
                  ofType: null,
                },
                defaultValue: null,
              },
              {
                name: "locale",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
                defaultValue: "\"en-us\"",
              },
              {
                name: "order_by",
                description: null,
                type: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "ENUM",
                    name: "SysAssetOrderBy",
                    ofType: null,
                  },
                },
                defaultValue: "[updated_at_DESC]",
              },
              {
                name: "skip",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
                defaultValue: "0",
              },
              {
                name: "limit",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
                defaultValue: "25",
              },
            ],
            type: {
              kind: "OBJECT",
              name: "AllSysAsset",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "ct2",
            description: null,
            args: [
              {
                name: "uid",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "SCALAR",
                    name: "String",
                    ofType: null,
                  },
                },
                defaultValue: null,
              },
              {
                name: "locale",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "SCALAR",
                    name: "String",
                    ofType: null,
                  },
                },
                defaultValue: "\"en-us\"",
              },
            ],
            type: {
              kind: "OBJECT",
              name: "Ct2",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "all_ct2",
            description: null,
            args: [
              {
                name: "where",
                description: null,
                type: {
                  kind: "INPUT_OBJECT",
                  name: "Ct2Where",
                  ofType: null,
                },
                defaultValue: null,
              },
              {
                name: "locale",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "SCALAR",
                    name: "String",
                    ofType: null,
                  },
                },
                defaultValue: "\"en-us\"",
              },
              {
                name: "order_by",
                description: null,
                type: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "ENUM",
                    name: "Ct2OrderBy",
                    ofType: null,
                  },
                },
                defaultValue: "[updated_at_DESC]",
              },
              {
                name: "skip",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
                defaultValue: "0",
              },
              {
                name: "limit",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
                defaultValue: "25",
              },
            ],
            type: {
              kind: "OBJECT",
              name: "AllCt2",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "ct1",
            description: null,
            args: [
              {
                name: "uid",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "SCALAR",
                    name: "String",
                    ofType: null,
                  },
                },
                defaultValue: null,
              },
              {
                name: "locale",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "SCALAR",
                    name: "String",
                    ofType: null,
                  },
                },
                defaultValue: "\"en-us\"",
              },
            ],
            type: {
              kind: "OBJECT",
              name: "Ct1",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "all_ct1",
            description: null,
            args: [
              {
                name: "where",
                description: null,
                type: {
                  kind: "INPUT_OBJECT",
                  name: "Ct1Where",
                  ofType: null,
                },
                defaultValue: null,
              },
              {
                name: "locale",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "SCALAR",
                    name: "String",
                    ofType: null,
                  },
                },
                defaultValue: "\"en-us\"",
              },
              {
                name: "order_by",
                description: null,
                type: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "ENUM",
                    name: "Ct1OrderBy",
                    ofType: null,
                  },
                },
                defaultValue: "[updated_at_DESC]",
              },
              {
                name: "skip",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
                defaultValue: "0",
              },
              {
                name: "limit",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
                defaultValue: "25",
              },
            ],
            type: {
              kind: "OBJECT",
              name: "AllCt1",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "SysAsset",
        description: null,
        fields: [
          {
            name: "title",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "url",
            description: null,
            args: [
              {
                name: "transform",
                description: "Contentstack Image Delivery API is used to retrieve, manipulate and/or convert image files of your Contentstack account and deliver it to your web or mobile properties",
                type: {
                  kind: "INPUT_OBJECT",
                  name: "SysAssetTransformUrl",
                  ofType: null,
                },
                defaultValue: null,
              },
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "permanent_url",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "content_type",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "filename",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "file_size",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "description",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "dimension",
            description: null,
            args: [
            ],
            type: {
              kind: "OBJECT",
              name: "SysAssetDimension",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "metadata",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "JSON",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "unique_identifier",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "system",
            description: null,
            args: [
            ],
            type: {
              kind: "OBJECT",
              name: "SysAssetSystemField",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "SCALAR",
        name: "String",
        description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "INPUT_OBJECT",
        name: "SysAssetTransformUrl",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "height",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "width",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "format",
            description: "Format parameter lets you converts a given image from one format to another",
            type: {
              kind: "ENUM",
              name: "SysAssetImageFormats",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "disable",
            description: "The disable parameter disables the functionality that is enabled by default",
            type: {
              kind: "ENUM",
              name: "SysAssetDisableValues",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "fit",
            description: "Fit parameter enables you to fit the given image properly within the specified height and width",
            type: {
              kind: "ENUM",
              name: "SysAssetFitValues",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "quality",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "crop",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "trim",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "orient",
            description: "The orient parameter lets you control the cardinal orientation of the given image",
            type: {
              kind: "ENUM",
              name: "SysAssetOrientValues",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "overlay",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "overlay_align",
            description: null,
            type: {
              kind: "ENUM",
              name: "SysAssetOverlayAlignValues",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "overlay_repeat",
            description: "The overlay_repeat parameter lets you define how the overlay image will be repeated on the given image",
            type: {
              kind: "ENUM",
              name: "SysAssetOverlayRepeatValues",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "auto",
            description: "When the auto parameter is set to webp, it enables WebP image support. WebP images have higher compression rate with minimum loss of quality.",
            type: {
              kind: "ENUM",
              name: "SysAssetAutoValues",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "disposition",
            description: "The disposition parameter lets you allow image to download or render. ",
            type: {
              kind: "ENUM",
              name: "SysAssetDispositionValues",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "dpr",
            description: "The dpr parameter lets you deliver images with appropriate size to devices that come with a defined device pixel ratio. The device pixel ratio of any device determines the screen resolution that its CSS would interpret",
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "bg_color",
            description: "The bg-color parameter lets you set a backgroud color for the given image. This is useful when applying padding or for replacing the transparent pixels of an image",
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "pad",
            description: "This parameter lets you add extra pixels to the edges of an image. You can specify values for top, right, bottom, and left padding for an image",
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "overlay_height",
            description: "The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When height is defined in percentage, it relative to the output image",
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "overlay_width",
            description: "The value for this parameter can be set in pixels or percentage. For pixel value, use any whole number between 1 and 8192. For percentage value, use any decimal number between 0.0 and 0.99. When width is defined in percentage, it is relative to the output image",
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "ENUM",
        name: "SysAssetImageFormats",
        description: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "GIF",
            description: "Convert an image to GIF format",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "PNG",
            description: "Convert an image to PNG format",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "JPG",
            description: "Convert an image to JPEG format",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "PJPG",
            description: "A Progressive JPEG is an image file created using a compression method that displays higher detail in progression",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "WEBP",
            description: "WEBP images are usually lower in size and have good quality",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "WEBPLL",
            description: "WEBP Lossless format",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "WEBPLY",
            description: "WEBP Lossy format",
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
      {
        kind: "ENUM",
        name: "SysAssetDisableValues",
        description: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "UPSCALE",
            description: "UPSCALE is always enabled, in which the image is upscaled if the output image (by specifying the width or height) is bigger than the source image",
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
      {
        kind: "ENUM",
        name: "SysAssetFitValues",
        description: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "BOUNDS",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "CROP",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
      {
        kind: "SCALAR",
        name: "Int",
        description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "ENUM",
        name: "SysAssetOrientValues",
        description: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "DEFAULT",
            description: "Set image to default",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "HORIZONTALLY",
            description: "Flip image horizontally",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "BOTH",
            description: "Flip image horizontally and vertically",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "VERTICALLY",
            description: "Flip image vertically",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "ROTATE90LEFT",
            description: "Flip image horizontally and then rotate 90 degrees towards left",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "ROTATE90RIGHT",
            description: "Rotate image 90 degrees towards right",
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
      {
        kind: "ENUM",
        name: "SysAssetOverlayAlignValues",
        description: "The overlay_align parameter allows you to put one image on top of another",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "TOP",
            description: "Align the overlay image to the top of the actual image",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "BOTTOM",
            description: "Align the overlay image to the bottom of the actual image",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "LEFT",
            description: "Align the overlay image to the left of the actual image",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "RIGHT",
            description: "Align the overlay image to the right of the actual image",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "MIDDLE",
            description: "Align the overlay image to the middle (vertically) of the actual image",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "CENTER",
            description: "Align the overlay image to the center (horizontally) of the actual image",
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
      {
        kind: "ENUM",
        name: "SysAssetOverlayRepeatValues",
        description: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "X",
            description: "Horizontal repetition",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "Y",
            description: "Vertical repetition",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "BOTH",
            description: "Horizontal and vertical repetition",
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
      {
        kind: "ENUM",
        name: "SysAssetAutoValues",
        description: "WEBP images are usually lower in size and have good quality.",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "WEBP",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
      {
        kind: "ENUM",
        name: "SysAssetDispositionValues",
        description: "This parameter allows an image to be downloaded or rendered on page",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "ATTACHMENT",
            description: "Allows to download an image",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "INLINE",
            description: "Allows an image to be rendered on page",
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "SysAssetDimension",
        description: null,
        fields: [
          {
            name: "width",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "height",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "SCALAR",
        name: "JSON",
        description: "The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "SysAssetSystemField",
        description: null,
        fields: [
          {
            name: "branch",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "created_at",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "updated_at",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "created_by",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "updated_by",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "uid",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "tags",
            description: null,
            args: [
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "version",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "content_type_uid",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "publish_details",
            description: null,
            args: [
            ],
            type: {
              kind: "OBJECT",
              name: "SystemPublishDetails",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "extensionConnection",
            description: null,
            args: [
              {
                name: "skip",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
                defaultValue: "0",
              },
              {
                name: "limit",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
                defaultValue: "25",
              },
            ],
            type: {
              kind: "OBJECT",
              name: "SysExtensionConnection",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "SCALAR",
        name: "DateTime",
        description: "This field accepts both ISODateString and ISODateTimeStringexample: 1992-08-14 or 1992-08-14T03:42:00.000Z",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "SystemPublishDetails",
        description: null,
        fields: [
          {
            name: "environment",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "locale",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "time",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "user",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "SysExtensionConnection",
        description: null,
        fields: [
          {
            name: "totalCount",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "edges",
            description: null,
            args: [
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "SysExtensionEdge",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "SysExtensionEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: null,
            args: [
            ],
            type: {
              kind: "OBJECT",
              name: "SysMetadata",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "SysMetadata",
        description: null,
        fields: [
          {
            name: "metadata",
            description: null,
            args: [
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "JSON",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "extension_uid",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "AllSysAsset",
        description: null,
        fields: [
          {
            name: "total",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "items",
            description: null,
            args: [
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "SysAsset",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "INPUT_OBJECT",
        name: "SysAssetWhere",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "title",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "title_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "title_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "title_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "title_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "url",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "url_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "url_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "url_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "url_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "filename",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "filename_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "filename_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "filename_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "filename_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "description",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "description_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "description_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "description_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "description_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "created_at_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "created_at_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_lt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_lte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_gt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_gte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "updated_at_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "updated_at_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_lt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_lte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_gt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_gte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "uid",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "uid_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "uid_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "uid_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "uid_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "file_size",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "file_size_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "file_size_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Int",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "file_size_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Int",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "file_size_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "file_size_lt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "file_size_lte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "file_size_gt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "file_size_gte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "dimension_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "dimension",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "SysAssetDimensionWhere",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "tags",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "tags_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "tags_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "title_regex",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "RegExOptions",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "url_regex",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "RegExOptions",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "description_regex",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "RegExOptions",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "uid_regex",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "RegExOptions",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "filename_regex",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "RegExOptions",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "AND",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "INPUT_OBJECT",
                name: "SysAssetWhere",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "OR",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "INPUT_OBJECT",
                name: "SysAssetWhere",
                ofType: null,
              },
            },
            defaultValue: null,
          },
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "SCALAR",
        name: "Boolean",
        description: "The `Boolean` scalar type represents `true` or `false`.",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "INPUT_OBJECT",
        name: "SysAssetDimensionWhere",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "width",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "width_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "width_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Int",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "width_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Int",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "width_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "width_lt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "width_lte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "width_gt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "width_gte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "height",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "height_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "height_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Int",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "height_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Int",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "height_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "height_lt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "height_lte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "height_gt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "height_gte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "INPUT_OBJECT",
        name: "RegExOptions",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "pattern",
            description: "RegEx pattern. The options will default to 'i'",
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "ENUM",
        name: "SysAssetOrderBy",
        description: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "created_at_ASC",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "created_at_DESC",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "updated_at_ASC",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "updated_at_DESC",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "Ct2",
        description: null,
        fields: [
          {
            name: "title",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "fileConnection",
            description: null,
            args: [
            ],
            type: {
              kind: "OBJECT",
              name: "SysAssetConnection",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "system",
            description: null,
            args: [
            ],
            type: {
              kind: "OBJECT",
              name: "EntrySystemField",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "SysAssetConnection",
        description: null,
        fields: [
          {
            name: "totalCount",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "edges",
            description: null,
            args: [
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "SysAssetEdge",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "SysAssetEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: null,
            args: [
            ],
            type: {
              kind: "OBJECT",
              name: "SysAsset",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "EntrySystemField",
        description: null,
        fields: [
          {
            name: "branch",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "created_at",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "publish_details",
            description: null,
            args: [
            ],
            type: {
              kind: "OBJECT",
              name: "SystemPublishDetails",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "updated_at",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "created_by",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "updated_by",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "uid",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "tags",
            description: null,
            args: [
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "version",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "content_type_uid",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "locale",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "extensionConnection",
            description: null,
            args: [
              {
                name: "skip",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
                defaultValue: "0",
              },
              {
                name: "limit",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
                defaultValue: "25",
              },
            ],
            type: {
              kind: "OBJECT",
              name: "SysExtensionConnection",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "AllCt2",
        description: null,
        fields: [
          {
            name: "total",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "items",
            description: null,
            args: [
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "Ct2",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "INPUT_OBJECT",
        name: "Ct2Where",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "title",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "title_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "title_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "title_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "title_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "title_regex",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "RegExOptions",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "file",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "SysAssetWhere",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "file_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "created_at_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "created_at_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_by",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_by_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "created_by_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "created_by_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_lt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_lte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_gt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_gte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "updated_at_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "updated_at_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_by",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_by_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "updated_by_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "updated_by_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_lt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_lte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_gt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_gte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "locale",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "locale_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "locale_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "locale_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "locale_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "locale_regex",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "RegExOptions",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "uid",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "uid_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "uid_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "uid_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "uid_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "uid_regex",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "RegExOptions",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "tags_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "tags_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "version",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "version_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "version_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Int",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "version_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Int",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "version_lt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "version_lte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "version_gt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "version_gte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "publish_details",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "SystemPublishDetailsWhere",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "AND",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "INPUT_OBJECT",
                name: "Ct2Where",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "OR",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "INPUT_OBJECT",
                name: "Ct2Where",
                ofType: null,
              },
            },
            defaultValue: null,
          },
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "INPUT_OBJECT",
        name: "SystemPublishDetailsWhere",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "time",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "time_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "time_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "time_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "time_lt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "time_lte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "time_gt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "time_gte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "user",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "user_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "user_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "user_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "locale",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "locale_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "locale_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "locale_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "ENUM",
        name: "Ct2OrderBy",
        description: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "created_at_ASC",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "created_at_DESC",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "updated_at_ASC",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "updated_at_DESC",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "Ct1",
        description: null,
        fields: [
          {
            name: "title",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "customConnection",
            description: null,
            args: [
            ],
            type: {
              kind: "OBJECT",
              name: "SysAssetConnection",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "system",
            description: null,
            args: [
            ],
            type: {
              kind: "OBJECT",
              name: "EntrySystemField",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "AllCt1",
        description: null,
        fields: [
          {
            name: "total",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "items",
            description: null,
            args: [
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "Ct1",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "INPUT_OBJECT",
        name: "Ct1Where",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "title",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "title_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "title_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "title_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "title_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "title_regex",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "RegExOptions",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "custom",
            description: null,
            type: {
              kind: "SCALAR",
              name: "JSON",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "custom_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "created_at_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "created_at_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_by",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_by_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "created_by_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "created_by_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_lt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_lte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_gt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "created_at_gte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "updated_at_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "DateTime",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "updated_at_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_by",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_by_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "updated_by_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "updated_by_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_lt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_lte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_gt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "updated_at_gte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "locale",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "locale_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "locale_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "locale_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "locale_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "locale_regex",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "RegExOptions",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "uid",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "uid_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "uid_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "uid_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "uid_exists",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "uid_regex",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "RegExOptions",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "tags_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "tags_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "version",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "version_ne",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "version_in",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Int",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "version_nin",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Int",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "version_lt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "version_lte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "version_gt",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "version_gte",
            description: null,
            type: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "publish_details",
            description: null,
            type: {
              kind: "INPUT_OBJECT",
              name: "SystemPublishDetailsWhere",
              ofType: null,
            },
            defaultValue: null,
          },
          {
            name: "AND",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "INPUT_OBJECT",
                name: "Ct1Where",
                ofType: null,
              },
            },
            defaultValue: null,
          },
          {
            name: "OR",
            description: null,
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "INPUT_OBJECT",
                name: "Ct1Where",
                ofType: null,
              },
            },
            defaultValue: null,
          },
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "ENUM",
        name: "Ct1OrderBy",
        description: null,
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "created_at_ASC",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "created_at_DESC",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "updated_at_ASC",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "updated_at_DESC",
            description: null,
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "__Schema",
        description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
        fields: [
          {
            name: "description",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "types",
            description: "A list of all types supported by this server.",
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "OBJECT",
                    name: "__Type",
                    ofType: null,
                  },
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "queryType",
            description: "The type that query operations will be rooted at.",
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "__Type",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "mutationType",
            description: "If this server supports mutation, the type that mutation operations will be rooted at.",
            args: [
            ],
            type: {
              kind: "OBJECT",
              name: "__Type",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "subscriptionType",
            description: "If this server support subscription, the type that subscription operations will be rooted at.",
            args: [
            ],
            type: {
              kind: "OBJECT",
              name: "__Type",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "directives",
            description: "A list of all directives supported by this server.",
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "OBJECT",
                    name: "__Directive",
                    ofType: null,
                  },
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "__Type",
        description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
        fields: [
          {
            name: "kind",
            description: null,
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "ENUM",
                name: "__TypeKind",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "name",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "description",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "specifiedByURL",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "fields",
            description: null,
            args: [
              {
                name: "includeDeprecated",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Boolean",
                  ofType: null,
                },
                defaultValue: "false",
              },
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "__Field",
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "interfaces",
            description: null,
            args: [
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "__Type",
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "possibleTypes",
            description: null,
            args: [
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "__Type",
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "enumValues",
            description: null,
            args: [
              {
                name: "includeDeprecated",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Boolean",
                  ofType: null,
                },
                defaultValue: "false",
              },
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "__EnumValue",
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "inputFields",
            description: null,
            args: [
              {
                name: "includeDeprecated",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Boolean",
                  ofType: null,
                },
                defaultValue: "false",
              },
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "__InputValue",
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "ofType",
            description: null,
            args: [
            ],
            type: {
              kind: "OBJECT",
              name: "__Type",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "ENUM",
        name: "__TypeKind",
        description: "An enum describing what kind of type a given `__Type` is.",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "SCALAR",
            description: "Indicates this type is a scalar.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "OBJECT",
            description: "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "INTERFACE",
            description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "UNION",
            description: "Indicates this type is a union. `possibleTypes` is a valid field.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "ENUM",
            description: "Indicates this type is an enum. `enumValues` is a valid field.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "INPUT_OBJECT",
            description: "Indicates this type is an input object. `inputFields` is a valid field.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "LIST",
            description: "Indicates this type is a list. `ofType` is a valid field.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "NON_NULL",
            description: "Indicates this type is a non-null. `ofType` is a valid field.",
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "__Field",
        description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
        fields: [
          {
            name: "name",
            description: null,
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "description",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "args",
            description: null,
            args: [
              {
                name: "includeDeprecated",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Boolean",
                  ofType: null,
                },
                defaultValue: "false",
              },
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "OBJECT",
                    name: "__InputValue",
                    ofType: null,
                  },
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "type",
            description: null,
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "__Type",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "isDeprecated",
            description: null,
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Boolean",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "deprecationReason",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "__InputValue",
        description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
        fields: [
          {
            name: "name",
            description: null,
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "description",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "type",
            description: null,
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "__Type",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "defaultValue",
            description: "A GraphQL-formatted string representing the default value for this input value.",
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "isDeprecated",
            description: null,
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Boolean",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "deprecationReason",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "__EnumValue",
        description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
        fields: [
          {
            name: "name",
            description: null,
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "description",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "isDeprecated",
            description: null,
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Boolean",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "deprecationReason",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "OBJECT",
        name: "__Directive",
        description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
        fields: [
          {
            name: "name",
            description: null,
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "description",
            description: null,
            args: [
            ],
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "isRepeatable",
            description: null,
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Boolean",
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "locations",
            description: null,
            args: [
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "ENUM",
                    name: "__DirectiveLocation",
                    ofType: null,
                  },
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "args",
            description: null,
            args: [
              {
                name: "includeDeprecated",
                description: null,
                type: {
                  kind: "SCALAR",
                  name: "Boolean",
                  ofType: null,
                },
                defaultValue: "false",
              },
            ],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "OBJECT",
                    name: "__InputValue",
                    ofType: null,
                  },
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: "ENUM",
        name: "__DirectiveLocation",
        description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "QUERY",
            description: "Location adjacent to a query operation.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "MUTATION",
            description: "Location adjacent to a mutation operation.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "SUBSCRIPTION",
            description: "Location adjacent to a subscription operation.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "FIELD",
            description: "Location adjacent to a field.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "FRAGMENT_DEFINITION",
            description: "Location adjacent to a fragment definition.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "FRAGMENT_SPREAD",
            description: "Location adjacent to a fragment spread.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "INLINE_FRAGMENT",
            description: "Location adjacent to an inline fragment.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "VARIABLE_DEFINITION",
            description: "Location adjacent to a variable definition.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "SCHEMA",
            description: "Location adjacent to a schema definition.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "SCALAR",
            description: "Location adjacent to a scalar definition.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "OBJECT",
            description: "Location adjacent to an object type definition.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "FIELD_DEFINITION",
            description: "Location adjacent to a field definition.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "ARGUMENT_DEFINITION",
            description: "Location adjacent to an argument definition.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "INTERFACE",
            description: "Location adjacent to an interface definition.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "UNION",
            description: "Location adjacent to a union definition.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "ENUM",
            description: "Location adjacent to an enum definition.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "ENUM_VALUE",
            description: "Location adjacent to an enum value definition.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "INPUT_OBJECT",
            description: "Location adjacent to an input object type definition.",
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: "INPUT_FIELD_DEFINITION",
            description: "Location adjacent to an input object field definition.",
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
    ],
    directives: [
      {
        name: "include",
        description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
        locations: [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT",
        ],
        args: [
          {
            name: "if",
            description: "Included when true.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Boolean",
                ofType: null,
              },
            },
            defaultValue: null,
          },
        ],
      },
      {
        name: "skip",
        description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
        locations: [
          "FIELD",
          "FRAGMENT_SPREAD",
          "INLINE_FRAGMENT",
        ],
        args: [
          {
            name: "if",
            description: "Skipped when true.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "Boolean",
                ofType: null,
              },
            },
            defaultValue: null,
          },
        ],
      },
      {
        name: "deprecated",
        description: "Marks an element of a GraphQL schema as no longer supported.",
        locations: [
          "FIELD_DEFINITION",
          "ARGUMENT_DEFINITION",
          "INPUT_FIELD_DEFINITION",
          "ENUM_VALUE",
        ],
        args: [
          {
            name: "reason",
            description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
            type: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
            defaultValue: "\"No longer supported\"",
          },
        ],
      },
      {
        name: "specifiedBy",
        description: "Exposes a URL that specifies the behavior of this scalar.",
        locations: [
          "SCALAR",
        ],
        args: [
          {
            name: "url",
            description: "The URL that specifies the behavior of this scalar.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
            },
            defaultValue: null,
          },
        ],
      },
    ],
  },
}

export {
  mock_data
}