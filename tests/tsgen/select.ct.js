const select = {
  created_at: "2020-07-12T15:19:18.713Z",
  updated_at: "2020-10-28T01:17:25.986Z",
  title: "Select",
  uid: "select",
  _version: 5,
  inbuilt_class: false,
  schema: [
    {
      display_name: "Title",
      uid: "title",
      data_type: "text",
      mandatory: true,
      unique: true,
      field_metadata: {
        _default: true,
        version: 3,
      },
      multiple: false,
      non_localizable: false,
    },
    {
      data_type: "text",
      display_name: "Select Single Value",
      display_type: "dropdown",
      enum: {
        advanced: false,
        choices: [
          {
            value: "Option 1",
          },
          {
            value: "Option 2",
          },
          {
            value: "Option 3",
          },
        ],
      },
      multiple: false,
      uid: "select_single_value",
      field_metadata: {
        description: "",
        default_value: "",
        version: 3,
      },
      mandatory: false,
      unique: false,
      non_localizable: false,
    },
    {
      data_type: "text",
      display_name: "Select Single Value Required",
      display_type: "dropdown",
      enum: {
        advanced: false,
        choices: [
          {
            value: "Test 1",
          },
          {
            value: "Test 2",
          },
          {
            value: "Test 3",
          },
        ],
      },
      multiple: false,
      uid: "select_single_value_required",
      field_metadata: {
        description: "",
        default_value: "",
        version: 3,
      },
      mandatory: true,
      unique: false,
      non_localizable: false,
    },
    {
      data_type: "text",
      display_name: "Select Single Value with Quotes",
      display_type: "dropdown",
      enum: {
        advanced: false,
        choices: [
          {
            value: '"ABC"',
          },
          {
            value: "A'B'C",
          },
          {
            value: "`A`B`C",
          },
        ],
      },
      multiple: false,
      uid: "select_single_value_with_quotes",
      field_metadata: {
        description: "",
        default_value: "",
        version: 3,
      },
      mandatory: false,
      unique: false,
      non_localizable: false,
    },
    {
      data_type: "text",
      display_name: "Select Multi Value",
      display_type: "dropdown",
      enum: {
        advanced: false,
        choices: [
          {
            value: "Multi 1",
          },
          {
            value: "Multi 2",
          },
          {
            value: "Multi 3",
          },
        ],
      },
      multiple: true,
      uid: "select_multi_value",
      field_metadata: {
        description: "",
        default_value: "",
        version: 3,
      },
      mandatory: false,
      unique: false,
      non_localizable: false,
    },
    {
      data_type: "text",
      display_name: "Select Multi Value Required",
      display_type: "dropdown",
      enum: {
        advanced: false,
        choices: [
          {
            value: "Multi Req 1",
          },
          {
            value: "Multi Req 2",
          },
          {
            value: "Multi Req 3",
          },
        ],
      },
      multiple: true,
      uid: "select_multi_value_required",
      field_metadata: {
        description: "",
        default_value: "",
        version: 3,
      },
      mandatory: true,
      unique: false,
      non_localizable: false,
    },
    {
      data_type: "number",
      display_name: "Select Number Values",
      display_type: "dropdown",
      enum: {
        advanced: false,
        choices: [
          {
            value: 1,
          },
          {
            value: 2,
          },
          {
            value: 3,
          },
          {
            value: 4,
          },
        ],
      },
      multiple: false,
      uid: "select_number_values",
      field_metadata: {
        description: "",
        default_value: "",
      },
      mandatory: false,
      unique: false,
      non_localizable: false,
    },
  ],
  last_activity: {},
  maintain_revisions: true,
  description: "",
  DEFAULT_ACL: {
    others: {
      read: false,
      create: false,
    },
    users: [
      {
        uid: "blta1a106c13958e89d",
        read: true,
        sub_acl: {
          read: true,
        },
      },
    ],
  },
  SYS_ACL: {
    roles: [
      {
        uid: "blt127263b8951e2542",
        read: true,
        sub_acl: {
          create: true,
          read: true,
          update: true,
          delete: true,
          publish: true,
        },
        update: true,
        delete: true,
      },
      {
        uid: "blt7e69bb0e63cc5fb6",
        read: true,
        sub_acl: {
          create: true,
          read: true,
          update: true,
          delete: true,
          publish: true,
        },
      },
      {
        uid: "bltb442c49a50c5804d",
        read: true,
        sub_acl: {
          create: true,
          read: true,
          update: true,
          delete: true,
          publish: true,
        },
        update: true,
        delete: true,
      },
    ],
    others: {
      read: false,
      create: false,
      update: false,
      delete: false,
      sub_acl: {
        read: false,
        create: false,
        update: false,
        delete: false,
        publish: false,
      },
    },
  },
  options: {
    is_page: false,
    singleton: true,
    title: "title",
    sub_title: [],
  },
  abilities: {
    get_one_object: true,
    get_all_objects: true,
    create_object: true,
    update_object: true,
    delete_object: true,
    delete_all_objects: true,
  },
};

module.exports = {
  select,
};
