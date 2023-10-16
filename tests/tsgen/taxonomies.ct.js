const builtinTaxonomies = {
  created_at: '2020-07-12T14:36:50.167Z',
  updated_at: '2020-07-12T14:37:02.250Z',
  title: 'Taxonomies',
  uid: 'taxonomy',
  _version: 2,
  inbuilt_class: false,
  schema: [
    {
      display_name: 'Title',
      uid: 'title',
      data_type: 'text',
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
      data_type: 'boolean',
      display_name: 'Boolean',
      uid: 'boolean',
      field_metadata: {
        description: '',
        default_value: '',
      },
      multiple: false,
      mandatory: false,
      unique: false,
      non_localizable: false,
    },
    {
      data_type: 'taxonomy',
      display_name: 'Taxonomy',
      uid: 'taxonomies',
      taxonomies: [
        {
          taxonomy_uid: 'taxonomy1',
          max_terms: 2,
          mandatory: true,
          non_localizable: false,
        },
        {
          taxonomy_uid: 'taxonomy2',
          max_terms: 2,
          mandatory: true,
          non_localizable: false,
        },
      ],
      field_metadata: {description: '', default_value: ''},
      format: '',
      mandatory: false,
      multiple: true,
      non_localizable: false,
      unique: false,
      schema: [],
    },
  ],
  last_activity: {},
  maintain_revisions: true,
  description: '',
  DEFAULT_ACL: {
    others: {
      read: false,
      create: false,
    },
    users: [
      {
        uid: 'user1',
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
        uid: 'role1',
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
        uid: 'role2',
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
        uid: 'role3',
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
    title: 'title',
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
}

module.exports = {builtinTaxonomies}
