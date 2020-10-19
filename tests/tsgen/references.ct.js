const references = {
  created_at: "2020-07-13T15:04:40.394Z",
  updated_at: "2020-07-13T15:39:12.714Z",
  title: "Reference Parent",
  uid: "reference_parent",
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
      display_name: "URL",
      uid: "url",
      data_type: "text",
      mandatory: true,
      field_metadata: {
        _default: true,
        version: 3,
      },
      multiple: false,
      unique: false,
      non_localizable: false,
    },
    {
      data_type: "reference",
      display_name: "Single Reference",
      reference_to: ["reference_child"],
      field_metadata: {
        ref_multiple: false,
        ref_multiple_content_types: true,
      },
      uid: "single_reference",
      mandatory: true,
      multiple: false,
      unique: false,
      non_localizable: false,
    },
    {
      data_type: "reference",
      display_name: "Multiple Reference",
      reference_to: ["reference_child", "boolean", "builtin_example"],
      field_metadata: {
        ref_multiple: true,
        ref_multiple_content_types: true,
      },
      uid: "multiple_reference",
      multiple: false,
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
    is_page: true,
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
  references,
};
