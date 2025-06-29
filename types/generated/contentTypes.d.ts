import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAiAgentAiAgent extends Struct.CollectionTypeSchema {
  collectionName: 'ai_agents';
  info: {
    description: '';
    displayName: 'AI Agent';
    pluralName: 'ai-agents';
    singularName: 'ai-agent';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cardColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    caseStudes: Schema.Attribute.Relation<
      'manyToMany',
      'api::case-study.case-study'
    >;
    characteristic: Schema.Attribute.Component<'single.characteristic', true>;
    content: Schema.Attribute.RichText;
    content2: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    excerpt: Schema.Attribute.Text;
    faq: Schema.Attribute.Component<'shared.faq', true>;
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heroMedia: Schema.Attribute.Component<'single.hero-media', false>;
    iconBox: Schema.Attribute.Component<'shared.icon-box', true>;
    imageCaption: Schema.Attribute.Component<'shared.image-caption', true>;
    industry: Schema.Attribute.Relation<'manyToOne', 'api::industry.industry'>;
    integrations: Schema.Attribute.Relation<
      'manyToMany',
      'api::integration.integration'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-agent.ai-agent'
    > &
      Schema.Attribute.Private;
    nextjs: Schema.Attribute.Component<'shared.nextjs-comp', false>;
    priceBox: Schema.Attribute.Component<'shared.price-box', true>;
    publishedAt: Schema.Attribute.DateTime;
    quote: Schema.Attribute.Text;
    segment: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID;
    stats: Schema.Attribute.Component<'shared.stat-box', true>;
    tags: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    testimonials: Schema.Attribute.Relation<
      'manyToMany',
      'api::testimonial.testimonial'
    >;
    textArea1: Schema.Attribute.Text;
    textArea2: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    use_cases: Schema.Attribute.Relation<
      'manyToMany',
      'api::use-case.use-case'
    >;
  };
}

export interface ApiArticleArticle extends Struct.CollectionTypeSchema {
  collectionName: 'articles';
  info: {
    description: '';
    displayName: 'Help Article';
    pluralName: 'articles';
    singularName: 'article';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    excerpt: Schema.Attribute.Text;
    features: Schema.Attribute.Relation<'manyToMany', 'api::feature.feature'>;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    integrations: Schema.Attribute.Relation<
      'manyToMany',
      'api::integration.integration'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::article.article'
    > &
      Schema.Attribute.Private;
    pubDate: Schema.Attribute.Date;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ApiBlogBlog extends Struct.CollectionTypeSchema {
  collectionName: 'blogs';
  info: {
    description: '';
    displayName: 'Blog';
    pluralName: 'blogs';
    singularName: 'blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    excerpt: Schema.Attribute.Text;
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'> &
      Schema.Attribute.Private;
    nextjs: Schema.Attribute.Component<'shared.nextjs-comp', true>;
    pubDate: Schema.Attribute.Date;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID;
    tags: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCareerCareer extends Struct.CollectionTypeSchema {
  collectionName: 'careers';
  info: {
    description: '';
    displayName: 'Career';
    pluralName: 'careers';
    singularName: 'career';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    department: Schema.Attribute.Enumeration<
      [
        'Product',
        'Sales',
        'Operations',
        'Customer Support',
        'Engineering',
        'Marketing',
        'Administrative',
        'Finance',
      ]
    >;
    featuredIcon: Schema.Attribute.Enumeration<
      [
        'yobi-yobi_a_space',
        'yobi-yobi_archive_archive-add',
        'yobi-yobi_archive_archive-minus',
        'yobi-yobi_archive_archive-slash',
        'yobi-yobi_archive_archive-tick',
        'yobi-yobi_archive_book-saved',
        'yobi-yobi_archive_book-square',
        'yobi-yobi_archive_frame',
        'yobi-yobi_archive_receipt-square',
        'yobi-yobi_archive_save-2',
        'yobi-yobi_archive_save-add',
        'yobi-yobi_archive_save-minus',
        'yobi-yobi_archive_save-remove',
        'yobi-yobi_art_additem',
        'yobi-yobi_art_backward-item',
        'yobi-yobi_art_bezier',
        'yobi-yobi_art_blend',
        'yobi-yobi_art_blend-2',
        'yobi-yobi_art_blur',
        'yobi-yobi_art_brush',
        'yobi-yobi_art_brush-2',
        'yobi-yobi_art_brush-3',
        'yobi-yobi_art_brush-4',
        'yobi-yobi_art_bucket-circle',
        'yobi-yobi_art_bucket-square',
        'yobi-yobi_art_colorfilter',
        'yobi-yobi_art_colors-square',
        'yobi-yobi_art_color-swatch',
        'yobi-yobi_art_component',
        'yobi-yobi_art_copy',
        'yobi-yobi_art_copy-success',
        'yobi-yobi_art_designtools',
        'yobi-yobi_art_eraser',
        'yobi-yobi_art_flash-circle',
        'yobi-yobi_art_forward-item',
        'yobi-yobi_art_glass',
        'yobi-yobi_art_group',
        'yobi-yobi_art_group-2',
        'yobi-yobi_art_layer',
        'yobi-yobi_art_lifebuoy',
        'yobi-yobi_art_magicpen',
        'yobi-yobi_art_main-component',
        'yobi-yobi_art_mask',
        'yobi-yobi_art_mask-2',
        'yobi-yobi_art_mask-3',
        'yobi-yobi_art_omega-circle',
        'yobi-yobi_art_omega-square',
        'yobi-yobi_art_paintbucket',
        'yobi-yobi_art_path',
        'yobi-yobi_art_path-2',
        'yobi-yobi_art_path-square',
        'yobi-yobi_art_pen-add',
        'yobi-yobi_art_pen-close',
        'yobi-yobi_art_pen-remove',
        'yobi-yobi_art_pen-tool',
        'yobi-yobi_art_pen-tool-2',
        'yobi-yobi_art_recovery-convert',
        'yobi-yobi_art_rulerpen',
        'yobi-yobi_art_ruler',
        'yobi-yobi_art_scissor',
        'yobi-yobi_art_shapes',
        'yobi-yobi_art_shapes-2',
        'yobi-yobi_art_size',
        'yobi-yobi_biz_activity',
        'yobi-yobi_biz_chart',
        'yobi-yobi_biz_chart-2',
        'yobi-yobi_biz_chart-3',
        'yobi-yobi_biz_chart-4',
        'yobi-yobi_biz_chart-success',
        'yobi-yobi_biz_diagram',
        'yobi-yobi_biz_favorite-chart',
        'yobi-yobi_biz_frame',
        'yobi-yobi_biz_graph',
        'yobi-yobi_biz_hashtag',
        'yobi-yobi_biz_health',
        'yobi-yobi_biz_home-hashtag',
        'yobi-yobi_biz_home-trend-down',
        'yobi-yobi_biz_home-trend-up',
        'yobi-yobi_biz_personalcard',
        'yobi-yobi_biz_presention-chart',
        'yobi-yobi_biz_status-up',
        'yobi-yobi_biz_trend-down',
        'yobi-yobi_biz_trend-up',
        'yobi-yobi_building_bank',
        'yobi-yobi_building_building-2',
        'yobi-yobi_building_building-3',
        'yobi-yobi_building_building-4',
        'yobi-yobi_building_buildings',
        'yobi-yobi_building_buliding',
        'yobi-yobi_building_courthouse',
        'yobi-yobi_building_default',
        'yobi-yobi_building_hospital',
        'yobi-yobi_building_house',
        'yobi-yobi_building_house-2',
        'yobi-yobi_call',
        'yobi-yobi_call_add',
        'yobi-yobi_call_calling',
        'yobi-yobi_call_incoming',
        'yobi-yobi_call_minus',
        'yobi-yobi_call_outgoing',
        'yobi-yobi_call_received',
        'yobi-yobi_call_remove',
        'yobi-yobi_call_slash',
        'yobi-yobi_car_airplane',
        'yobi-yobi_car_airplane-square',
        'yobi-yobi_car_bus',
        'yobi-yobi_car_car',
        'yobi-yobi_car_driving',
        'yobi-yobi_car_gas-station',
        'yobi-yobi_car_ship',
        'yobi-yobi_car_smart-car',
        'yobi-yobi_chat_device-message',
        'yobi-yobi_chat_direct',
        'yobi-yobi_chat_directbox-default',
        'yobi-yobi_chat_directbox-notif',
        'yobi-yobi_chat_directbox-receive',
        'yobi-yobi_chat_directbox-send',
        'yobi-yobi_chat_direct-inbox',
        'yobi-yobi_chat_direct-normal',
        'yobi-yobi_chat_direct-notification',
        'yobi-yobi_chat_direct-send',
        'yobi-yobi_chat_message',
        'yobi-yobi_chat_message-2',
        'yobi-yobi_chat_message-add',
        'yobi-yobi_chat_message-add-2',
        'yobi-yobi_chat_message-circle',
        'yobi-yobi_chat_message-edit',
        'yobi-yobi_chat_message-favorite',
        'yobi-yobi_chat_message-minus',
        'yobi-yobi_chat_message-notif',
        'yobi-yobi_chat_message-remove',
        'yobi-yobi_chat_messages',
        'yobi-yobi_chat_messages-2',
        'yobi-yobi_chat_messages-3',
        'yobi-yobi_chat_messages-4',
        'yobi-yobi_chat_message-search',
        'yobi-yobi_chat_message-square',
        'yobi-yobi_chat_message-text',
        'yobi-yobi_chat_message-text-2',
        'yobi-yobi_chat_message-tick',
        'yobi-yobi_chat_message-time',
        'yobi-yobi_chat_sms',
        'yobi-yobi_chat_sms-edit',
        'yobi-yobi_chat_sms-notification',
        'yobi-yobi_chat_sms-search',
        'yobi-yobi_chat_sms-star',
        'yobi-yobi_chat_sms-tracking',
        'yobi-yobi_content_archive-book',
        'yobi-yobi_content_bill',
        'yobi-yobi_content_clipboard-close',
        'yobi-yobi_content_clipboard-export',
        'yobi-yobi_content_clipboard-import',
        'yobi-yobi_content_clipboard-text',
        'yobi-yobi_content_clipboard-tick',
        'yobi-yobi_content_copyright',
        'yobi-yobi_content_creative-commons',
        'yobi-yobi_content_document',
        'yobi-yobi_content_document-cloud',
        'yobi-yobi_content_document-copy',
        'yobi-yobi_content_document-download',
        'yobi-yobi_content_document-favorite',
        'yobi-yobi_content_document-filter',
        'yobi-yobi_content_document-forward',
        'yobi-yobi_content_document-like',
        'yobi-yobi_content_document-normal',
        'yobi-yobi_content_document-previous',
        'yobi-yobi_content_document-sketch',
        'yobi-yobi_content_document-text',
        'yobi-yobi_content_document-text-2',
        'yobi-yobi_content_document-upload',
        'yobi-yobi_content_edit',
        'yobi-yobi_content_edit-2',
        'yobi-yobi_content_menu-board',
        'yobi-yobi_content_note',
        'yobi-yobi_content_note-2',
        'yobi-yobi_content_note-add',
        'yobi-yobi_content_note-favorite',
        'yobi-yobi_content_note-remove',
        'yobi-yobi_content_note-text',
        'yobi-yobi_content_stickynote',
        'yobi-yobi_content_task',
        'yobi-yobi_content_task-square',
        'yobi-yobi_crypto_bitcoin-card',
        'yobi-yobi_crypto_bitcoin-convert',
        'yobi-yobi_crypto_bitcoin-refresh',
        'yobi-yobi_crypto_buy-crypto',
        'yobi-yobi_crypto_card-coin',
        'yobi-yobi_crypto_trade',
        'yobi-yobi_delivery_3d-cube-scan',
        'yobi-yobi_delivery_3d-rotate',
        'yobi-yobi_delivery_3d-square',
        'yobi-yobi_delivery_box',
        'yobi-yobi_delivery_box-2',
        'yobi-yobi_delivery_box-add',
        'yobi-yobi_delivery_box-remove',
        'yobi-yobi_delivery_box-search',
        'yobi-yobi_delivery_box-tick',
        'yobi-yobi_delivery_box-time',
        'yobi-yobi_delivery_convert-3d-cube',
        'yobi-yobi_delivery_group',
        'yobi-yobi_delivery_groups',
        'yobi-yobi_delivery_truck-remove',
        'yobi-yobi_delivery_truck-tick',
        'yobi-yobi_delivery_truck-time',
        'yobi-yobi_folder_2',
        'yobi-yobi_folder_add',
        'yobi-yobi_folder_cloud',
        'yobi-yobi_folder_cross',
        'yobi-yobi_folder_favorite',
        'yobi-yobi_folder_folder',
        'yobi-yobi_folder_minus',
        'yobi-yobi_folder_open',
        'yobi-yobi_grid_3square',
        'yobi-yobi_grid_align-bottom',
        'yobi-yobi_grid_align-horizontally',
        'yobi-yobi_grid_align-left',
        'yobi-yobi_grid_align-right',
        'yobi-yobi_grid_align-vertically',
        'yobi-yobi_grid_convertshape',
        'yobi-yobi_grid_convertshape-2',
        'yobi-yobi_grid_crop',
        'yobi-yobi_grid_element-1',
        'yobi-yobi_grid_element-2',
        'yobi-yobi_grid_element-3',
        'yobi-yobi_grid_element-4',
        'yobi-yobi_grid_element-equal',
        'yobi-yobi_grid_element-plus',
        'yobi-yobi_grid_fatrows',
        'yobi-yobi_grid_format-circle',
        'yobi-yobi_grid_format-square',
        'yobi-yobi_grid_frame',
        'yobi-yobi_grid_grid-1',
        'yobi-yobi_grid_grid-2',
        'yobi-yobi_grid_grid-3',
        'yobi-yobi_grid_grid-4',
        'yobi-yobi_grid_grid-5',
        'yobi-yobi_grid_grid-6',
        'yobi-yobi_grid_grid-7',
        'yobi-yobi_grid_grid-8',
        'yobi-yobi_grid_grid-9',
        'yobi-yobi_grid_grid-edit',
        'yobi-yobi_grid_grid-eraser',
        'yobi-yobi_grid_grid-lock',
        'yobi-yobi_grid_kanban',
        'yobi-yobi_grid_maximize',
        'yobi-yobi_grid_maximize-2',
        'yobi-yobi_grid_maximize-3',
        'yobi-yobi_grid_maximize-4',
        'yobi-yobi_grid_maximize-5',
        'yobi-yobi_grid_rotate-left',
        'yobi-yobi_grid_rotate-right',
        'yobi-yobi_grid_row-horizontal',
        'yobi-yobi_grid_row-vertical',
        'yobi-yobi_grid_slider-horizontal',
        'yobi-yobi_grid_slider-horizontal-2',
        'yobi-yobi_grid_slider-vertical',
        'yobi-yobi_grid_slider-vertical-2',
        'yobi-yobi_hardware_airdrop',
        'yobi-yobi_hardware_airpod',
        'yobi-yobi_hardware_airpods',
        'yobi-yobi_hardware_bluetooth',
        'yobi-yobi_hardware_bluetooth-2',
        'yobi-yobi_hardware_bluetooth-circle',
        'yobi-yobi_hardware_bluetooth-rectangle',
        'yobi-yobi_hardware_clock',
        'yobi-yobi_hardware_cloud-add',
        'yobi-yobi_hardware_cloud-change',
        'yobi-yobi_hardware_cloud-connection',
        'yobi-yobi_hardware_cloud-remove',
        'yobi-yobi_hardware_cpu',
        'yobi-yobi_hardware_cpu-charge',
        'yobi-yobi_hardware_cpu-setting',
        'yobi-yobi_hardware_devices',
        'yobi-yobi_hardware_driver',
        'yobi-yobi_hardware_driver-2',
        'yobi-yobi_hardware_driver-refresh',
        'yobi-yobi_hardware_electricity',
        'yobi-yobi_hardware_external-drive',
        'yobi-yobi_hardware_folder-connection',
        'yobi-yobi_hardware_game',
        'yobi-yobi_hardware_gameboy',
        'yobi-yobi_hardware_headphone',
        'yobi-yobi_hardware_headphones',
        'yobi-yobi_hardware_keyboard',
        'yobi-yobi_hardware_keyboard-open',
        'yobi-yobi_hardware_lamp',
        'yobi-yobi_hardware_microscope',
        'yobi-yobi_hardware_mirroring-screen',
        'yobi-yobi_hardware_monitor',
        'yobi-yobi_hardware_monitor-mobbile',
        'yobi-yobi_hardware_monitor-recorder',
        'yobi-yobi_hardware_mouse',
        'yobi-yobi_hardware_music-play',
        'yobi-yobi_hardware_printer',
        'yobi-yobi_hardware_printer-slash',
        'yobi-yobi_hardware_ram',
        'yobi-yobi_hardware_ram-2',
        'yobi-yobi_hardware_simcard',
        'yobi-yobi_hardware_simcard-2',
        'yobi-yobi_hardware_simcard-3',
        'yobi-yobi_hardware_speaker',
        'yobi-yobi_hardware_watch',
        'yobi-yobi_hardware_watch-status',
        'yobi-yobi_hardware_weight',
        'yobi-yobi_hardware-mobile',
        'yobi-yobi_huh_aquarius',
        'yobi-yobi_huh_gemini',
        'yobi-yobi_huh_gemini-2',
        'yobi-yobi_huh_man',
        'yobi-yobi_huh_sagittarius',
        'yobi-yobi_huh_woman',
        'yobi-yobi_learn_award',
        'yobi-yobi_learn_book',
        'yobi-yobi_learn_book-2',
        'yobi-yobi_learn_bookmark',
        'yobi-yobi_learn_bookmark-2',
        'yobi-yobi_learn_briefcase',
        'yobi-yobi_learn_brifecase-cross',
        'yobi-yobi_learn_brifecase-tick',
        'yobi-yobi_learn_brifecase-timer',
        'yobi-yobi_learn_calculator',
        'yobi-yobi_learn_clipboard',
        'yobi-yobi_learn_gift',
        'yobi-yobi_learn_note',
        'yobi-yobi_learn_note-2',
        'yobi-yobi_learn_teacher',
        'yobi-yobi_logo_aave-aave',
        'yobi-yobi_logo_android',
        'yobi-yobi_logo_ankr-ankr',
        'yobi-yobi_logo_apple',
        'yobi-yobi_logo_augur-rep',
        'yobi-yobi_logo_autonio-niox',
        'yobi-yobi_logo_avalanche-avax',
        'yobi-yobi_logo_be',
        'yobi-yobi_logo_binance-coin-bnb',
        'yobi-yobi_logo_binance-usd-busd',
        'yobi-yobi_logo_bitcoin-btc',
        'yobi-yobi_logo_blogger',
        'yobi-yobi_logo_bootsrap',
        'yobi-yobi_logo_cardano-ada',
        'yobi-yobi_logo_celo-celo',
        'yobi-yobi_logo_celsius-cel',
        'yobi-yobi_logo_chainlink-link',
        'yobi-yobi_logo_civic-cvc',
        'yobi-yobi_logo_dai-dai',
        'yobi-yobi_logo_dash-dash',
        'yobi-yobi_logo_decred-dcr',
        'yobi-yobi_logo_dent-dent',
        'yobi-yobi_logo_dropbox',
        'yobi-yobi_logo_educare-ekt',
        'yobi-yobi_logo_emercoin-emc',
        'yobi-yobi_logo_enjin-coin-enj',
        'yobi-yobi_logo_eos-eos',
        'yobi-yobi_logo_ethereum-eth',
        'yobi-yobi_logo_ethereum-classic-etc',
        'yobi-yobi_logo_facebook',
        'yobi-yobi_logo_figma',
        'yobi-yobi_logo_figma-2',
        'yobi-yobi_logo_frame',
        'yobi-yobi_logo_frame-2',
        'yobi-yobi_logo_framer',
        'yobi-yobi_logo_ftx-token-ftt',
        'yobi-yobi_logo_google',
        'yobi-yobi_logo_google-2',
        'yobi-yobi_logo_google-play',
        'yobi-yobi_logo_harmony-one',
        'yobi-yobi_logo_hedera-hashgraph-hbar',
        'yobi-yobi_logo_hex-hex',
        'yobi-yobi_logo_html-3',
        'yobi-yobi_logo_html-5',
        'yobi-yobi_logo_huobi-token-ht',
        'yobi-yobi_logo_icon-icx',
        'yobi-yobi_logo_illustrator',
        'yobi-yobi_logo_iost-iost',
        'yobi-yobi_logo_java-script',
        'yobi-yobi_logo_js',
        'yobi-yobi_logo_kyber-network-knc',
        'yobi-yobi_logo_litecoinltc',
        'yobi-yobi_logo_maker-mkr',
        'yobi-yobi_logo_messenger',
        'yobi-yobi_logo_monero-xmr',
        'yobi-yobi_logo_nebulas-nas',
        'yobi-yobi_logo_nem-xem',
        'yobi-yobi_logo_ocean-protocol-ocean',
        'yobi-yobi_logo_okb-okb',
        'yobi-yobi_logo_ontology-ont',
        'yobi-yobi_logo_paypal',
        'yobi-yobi_logo_photoshop',
        'yobi-yobi_logo_polkadot-dot',
        'yobi-yobi_logo_polygon-matic',
        'yobi-yobi_logo_python',
        'yobi-yobi_logo_quant-qnt',
        'yobi-yobi_logo_siacoin-sc',
        'yobi-yobi_logo_slack',
        'yobi-yobi_logo_snapchat',
        'yobi-yobi_logo_solana-sol',
        'yobi-yobi_logo_spotify',
        'yobi-yobi_logo_stacks-stx',
        'yobi-yobi_logo_stellar-xlm',
        'yobi-yobi_logo_tenx-pay',
        'yobi-yobi_logo_tether-usdt',
        'yobi-yobi_logo_the-graph-grt',
        'yobi-yobi_logo_theta-theta',
        'yobi-yobi_logo_thorchain-rune',
        'yobi-yobi_logo_trello',
        'yobi-yobi_logo_triangle',
        'yobi-yobi_logo_trontron-trx',
        'yobi-yobi_logo_twitch',
        'yobi-yobi_logo_usd-coin-usdc',
        'yobi-yobi_logo_velas-vlx',
        'yobi-yobi_logo_vibe-vibe',
        'yobi-yobi_logo_wanchain-wan',
        'yobi-yobi_logo_wanchain-wan-2',
        'yobi-yobi_logo_whatsapp',
        'yobi-yobi_logo_windows',
        'yobi-yobi_logo_wing-wing',
        'yobi-yobi_logo_xd',
        'yobi-yobi_logo_xiaomi',
        'yobi-yobi_logo_xrp-xrp',
        'yobi-yobi_logo_youtube',
        'yobi-yobi_logo_zel-zel',
        'yobi-yobi_logo_zoom',
        'yobi-yobi_map_arrow',
        'yobi-yobi_map_arrow-square',
        'yobi-yobi_map_direct-down',
        'yobi-yobi_map_direct-left',
        'yobi-yobi_map_direct-right',
        'yobi-yobi_map_direct-up',
        'yobi-yobi_map_discover',
        'yobi-yobi_map_global',
        'yobi-yobi_map_global-edit',
        'yobi-yobi_map_global-refresh',
        'yobi-yobi_map_global-search',
        'yobi-yobi_map_gps',
        'yobi-yobi_map_gps-slash',
        'yobi-yobi_map_location',
        'yobi-yobi_map_location-add',
        'yobi-yobi_map_location-cross',
        'yobi-yobi_map_location-minus',
        'yobi-yobi_map_location-slash',
        'yobi-yobi_map_location-tick',
        'yobi-yobi_map_map',
        'yobi-yobi_map_map-2',
        'yobi-yobi_map_picture-frame',
        'yobi-yobi_map_radar',
        'yobi-yobi_map_radar-2',
        'yobi-yobi_map_route-square',
        'yobi-yobi_map_routing',
        'yobi-yobi_map_routing-2',
        'yobi-yobi_media_audio-square',
        'yobi-yobi_media_backward',
        'yobi-yobi_media_backward-5-seconds',
        'yobi-yobi_media_backward-10-seconds',
        'yobi-yobi_media_backward-15-seconds',
        'yobi-yobi_media_camera',
        'yobi-yobi_media_camera-slash',
        'yobi-yobi_media_devices',
        'yobi-yobi_media_forward',
        'yobi-yobi_media_forward-5-seconds',
        'yobi-yobi_media_forward-10-seconds',
        'yobi-yobi_media_forward-15-seconds',
        'yobi-yobi_media_gallery',
        'yobi-yobi_media_gallery-add',
        'yobi-yobi_media_gallery-edit',
        'yobi-yobi_media_gallery-export',
        'yobi-yobi_media_gallery-favorite',
        'yobi-yobi_media_gallery-import',
        'yobi-yobi_media_gallery-remove',
        'yobi-yobi_media_gallery-slash',
        'yobi-yobi_media_gallery-tick',
        'yobi-yobi_media_group',
        'yobi-yobi_media_image',
        'yobi-yobi_media_maximize-circle',
        'yobi-yobi_media_microphone',
        'yobi-yobi_media_microphone-2',
        'yobi-yobi_media_microphone-slash',
        'yobi-yobi_media_microphone-slash-2',
        'yobi-yobi_media_mini-music-sqaure',
        'yobi-yobi_media_music',
        'yobi-yobi_media_music-circle',
        'yobi-yobi_media_music-dashboard',
        'yobi-yobi_media_music-filter',
        'yobi-yobi_media_music-library-2',
        'yobi-yobi_media_musicnote',
        'yobi-yobi_media_music-playlist',
        'yobi-yobi_media_music-square',
        'yobi-yobi_media_music-square-add',
        'yobi-yobi_media_music-square-remove',
        'yobi-yobi_media_music-square-search',
        'yobi-yobi_media_next',
        'yobi-yobi_media_note-square',
        'yobi-yobi_media_pause',
        'yobi-yobi_media_pause-circle',
        'yobi-yobi_media_play',
        'yobi-yobi_media_play-add',
        'yobi-yobi_media_play-circle',
        'yobi-yobi_media_play-cricle',
        'yobi-yobi_media_play-remove',
        'yobi-yobi_media_previous',
        'yobi-yobi_media_radio',
        'yobi-yobi_media_record',
        'yobi-yobi_media_record-circle',
        'yobi-yobi_media_repeate-music',
        'yobi-yobi_media_repeate-one',
        'yobi-yobi_media_scissor',
        'yobi-yobi_media_screenmirroring',
        'yobi-yobi_media_stop',
        'yobi-yobi_media_stop-circle',
        'yobi-yobi_media_subtitle',
        'yobi-yobi_media_video',
        'yobi-yobi_media_video-add',
        'yobi-yobi_media_video-circle',
        'yobi-yobi_media_video-horizontal',
        'yobi-yobi_media_video-octagon',
        'yobi-yobi_media_video-play',
        'yobi-yobi_media_video-remove',
        'yobi-yobi_media_video-slash',
        'yobi-yobi_media_video-square',
        'yobi-yobi_media_video-tick',
        'yobi-yobi_media_video-time',
        'yobi-yobi_media_video-vertical',
        'yobi-yobi_media_voice-cricle',
        'yobi-yobi_media_voice-square',
        'yobi-yobi_media_volume-cross',
        'yobi-yobi_media_volume-high',
        'yobi-yobi_media_volume-low',
        'yobi-yobi_media_volume-low-2',
        'yobi-yobi_media_volume-mute',
        'yobi-yobi_media_volume-slash',
        'yobi-yobi_media_volume-up',
        'yobi-yobi_misc_3dcube',
        'yobi-yobi_misc_add',
        'yobi-yobi_misc_add-circle',
        'yobi-yobi_misc_add-square',
        'yobi-yobi_misc_archive',
        'yobi-yobi_misc_autobrightness',
        'yobi-yobi_misc_battery-2full',
        'yobi-yobi_misc_battery-charging',
        'yobi-yobi_misc_battery-disable',
        'yobi-yobi_misc_battery-empty',
        'yobi-yobi_misc_battery-empty-2',
        'yobi-yobi_misc_battery-full',
        'yobi-yobi_misc_box-2',
        'yobi-yobi_misc_broom',
        'yobi-yobi_misc_bubble',
        'yobi-yobi_misc_cake',
        'yobi-yobi_misc_cd',
        'yobi-yobi_misc_chart',
        'yobi-yobi_misc_chrome',
        'yobi-yobi_misc_close-circle',
        'yobi-yobi_misc_close-square',
        'yobi-yobi_misc_coffee',
        'yobi-yobi_misc_computing',
        'yobi-yobi_misc_crown',
        'yobi-yobi_misc_crown-2',
        'yobi-yobi_misc_cup',
        'yobi-yobi_misc_danger',
        'yobi-yobi_misc_diamonds',
        'yobi-yobi_misc_discover',
        'yobi-yobi_misc_emoji-happy',
        'yobi-yobi_misc_emoji-normal',
        'yobi-yobi_misc_emoji-sad',
        'yobi-yobi_misc_filter',
        'yobi-yobi_misc_filter-add',
        'yobi-yobi_misc_filter-edit',
        'yobi-yobi_misc_filter-remove',
        'yobi-yobi_misc_filter-search',
        'yobi-yobi_misc_filter-square',
        'yobi-yobi_misc_filter-tick',
        'yobi-yobi_misc_flag',
        'yobi-yobi_misc_flag-2',
        'yobi-yobi_misc_flash',
        'yobi-yobi_misc_flash-circle',
        'yobi-yobi_misc_flash-slash',
        'yobi-yobi_misc_ghost',
        'yobi-yobi_misc_glass',
        'yobi-yobi_misc_grammerly',
        'yobi-yobi_misc_happyemoji',
        'yobi-yobi_misc_home',
        'yobi-yobi_misc_home-2',
        'yobi-yobi_misc_home-3',
        'yobi-yobi_misc_home-wifi',
        'yobi-yobi_misc_info-circle',
        'yobi-yobi_misc_information',
        'yobi-yobi_misc_instagram',
        'yobi-yobi_misc_judge',
        'yobi-yobi_misc_lamp',
        'yobi-yobi_misc_level',
        'yobi-yobi_misc_menu',
        'yobi-yobi_misc_milk',
        'yobi-yobi_misc_minus',
        'yobi-yobi_misc_minus-cirlce',
        'yobi-yobi_misc_minus-square',
        'yobi-yobi_misc_mirror',
        'yobi-yobi_misc_more-circle',
        'yobi-yobi_misc_more-square',
        'yobi-yobi_misc_mouse',
        'yobi-yobi_misc_mouse-circle',
        'yobi-yobi_misc_mouse-square',
        'yobi-yobi_misc_no',
        'yobi-yobi_misc_no-2',
        'yobi-yobi_misc_pet',
        'yobi-yobi_misc_ranking',
        'yobi-yobi_misc_reserve',
        'yobi-yobi_misc_safe-home',
        'yobi-yobi_misc_send',
        'yobi-yobi_misc_send-2',
        'yobi-yobi_misc_share',
        'yobi-yobi_misc_signpost',
        'yobi-yobi_misc_slash',
        'yobi-yobi_misc_slider',
        'yobi-yobi_misc_smart-home',
        'yobi-yobi_misc_sort',
        'yobi-yobi_misc_sound',
        'yobi-yobi_misc_speedometer',
        'yobi-yobi_misc_status',
        'yobi-yobi_misc_sticker',
        'yobi-yobi_misc_story',
        'yobi-yobi_misc_tag-cross',
        'yobi-yobi_misc_tag-right',
        'yobi-yobi_misc_tick-circle',
        'yobi-yobi_misc_tick-square',
        'yobi-yobi_misc_trash',
        'yobi-yobi_misc_tree',
        'yobi-yobi_misc_triangle',
        'yobi-yobi_misc_trush-square',
        'yobi-yobi_misc_verify',
        'yobi-yobi_misc_warning-2',
        'yobi-yobi_misc_weight',
        'yobi-yobi_misc_wifi',
        'yobi-yobi_misc_wifi-square',
        'yobi-yobi_money_archive',
        'yobi-yobi_money_card',
        'yobi-yobi_money_card-add',
        'yobi-yobi_money_card-edit',
        'yobi-yobi_money_card-pos',
        'yobi-yobi_money_card-receive',
        'yobi-yobi_money_card-remove',
        'yobi-yobi_money_card-remove-2',
        'yobi-yobi_money_cards',
        'yobi-yobi_money_card-send',
        'yobi-yobi_money_card-slash',
        'yobi-yobi_money_card-tick',
        'yobi-yobi_money_card-tick-2',
        'yobi-yobi_money_chart-square',
        'yobi-yobi_money_coin',
        'yobi-yobi_money_coin-2',
        'yobi-yobi_money_discount-circle',
        'yobi-yobi_money_discount-shape',
        'yobi-yobi_money_document',
        'yobi-yobi_money_dollar-circle',
        'yobi-yobi_money_dollar-square',
        'yobi-yobi_money_empty-wallet',
        'yobi-yobi_money_empty-wallet-add',
        'yobi-yobi_money_empty-wallet-change',
        'yobi-yobi_money_empty-wallet-remove',
        'yobi-yobi_money_empty-wallet-tick',
        'yobi-yobi_money_empty-wallet-time',
        'yobi-yobi_money_group',
        'yobi-yobi_money_group-2',
        'yobi-yobi_money_math',
        'yobi-yobi_money_money',
        'yobi-yobi_money_money-2',
        'yobi-yobi_money_money-3',
        'yobi-yobi_money_money-4',
        'yobi-yobi_money_money-add',
        'yobi-yobi_money_money-change',
        'yobi-yobi_money_money-forbidden',
        'yobi-yobi_money_money-recive',
        'yobi-yobi_money_money-remove',
        'yobi-yobi_money_moneys',
        'yobi-yobi_money_money-send',
        'yobi-yobi_money_money-tick',
        'yobi-yobi_money_money-time',
        'yobi-yobi_money_percentage-square',
        'yobi-yobi_money_receipt',
        'yobi-yobi_money_receipt-2',
        'yobi-yobi_money_receipt-3',
        'yobi-yobi_money_receipt-4',
        'yobi-yobi_money_receipt-add',
        'yobi-yobi_money_receipt-discount',
        'yobi-yobi_money_receipt-disscount',
        'yobi-yobi_money_receipt-edit',
        'yobi-yobi_money_receipt-item',
        'yobi-yobi_money_receipt-minus',
        'yobi-yobi_money_receipt-search',
        'yobi-yobi_money_receipt-text',
        'yobi-yobi_money_security-card',
        'yobi-yobi_money_strongbox',
        'yobi-yobi_money_strongbox-2',
        'yobi-yobi_money_tag',
        'yobi-yobi_money_tag-2',
        'yobi-yobi_money_ticket',
        'yobi-yobi_money_ticket-2',
        'yobi-yobi_money_ticket-discount',
        'yobi-yobi_money_ticket-expired',
        'yobi-yobi_money_ticket-star',
        'yobi-yobi_money_transaction-minus',
        'yobi-yobi_money_wallet',
        'yobi-yobi_money_wallet-2',
        'yobi-yobi_money_wallet-3',
        'yobi-yobi_money_wallet-4',
        'yobi-yobi_money_wallet-add',
        'yobi-yobi_money_wallet-add-2',
        'yobi-yobi_money_wallet-check',
        'yobi-yobi_money_wallet-minus',
        'yobi-yobi_money_wallet-money',
        'yobi-yobi_money_wallet-remove',
        'yobi-yobi_money_wallet-search',
        'yobi-yobi_move_arrange-circle',
        'yobi-yobi_move_arrange-circle-2',
        'yobi-yobi_move_arrange-square',
        'yobi-yobi_move_arrange-square-2',
        'yobi-yobi_move_arrow-2',
        'yobi-yobi_move_arrow-3',
        'yobi-yobi_move_arrow-circle-down',
        'yobi-yobi_move_arrow-circle-left',
        'yobi-yobi_move_arrow-circle-right',
        'yobi-yobi_move_arrow-down',
        'yobi-yobi_move_arrow-down-2',
        'yobi-yobi_move_arrow-down-3',
        'yobi-yobi_move_arrow-down-4',
        'yobi-yobi_move_arrow-left',
        'yobi-yobi_move_arrow-left-2',
        'yobi-yobi_move_arrow-left-3',
        'yobi-yobi_move_arrow-left-4',
        'yobi-yobi_move_arrow-right',
        'yobi-yobi_move_arrow-right-2',
        'yobi-yobi_move_arrow-right-3',
        'yobi-yobi_move_arrow-right-4',
        'yobi-yobi_move_arrow-square-down',
        'yobi-yobi_move_arrow-square-left',
        'yobi-yobi_move_arrow-square-right',
        'yobi-yobi_move_arrow-square-up',
        'yobi-yobi_move_arrow-swap-horizontal',
        'yobi-yobi_move_arrow-up',
        'yobi-yobi_move_arrow-up-2',
        'yobi-yobi_move_arrow-up-3',
        'yobi-yobi_move_arrow-up-4',
        'yobi-yobi_move_back-square',
        'yobi-yobi_move_convert',
        'yobi-yobi_move_export',
        'yobi-yobi_move_export-2',
        'yobi-yobi_move_export-3',
        'yobi-yobi_move_export-4',
        'yobi-yobi_move_forward-square',
        'yobi-yobi_move_frame',
        'yobi-yobi_move_frame-2',
        'yobi-yobi_move_frame-3',
        'yobi-yobi_move_import',
        'yobi-yobi_move_import-2',
        'yobi-yobi_move_import-3',
        'yobi-yobi_move_login',
        'yobi-yobi_move_login-2',
        'yobi-yobi_move_logout',
        'yobi-yobi_move_logout-2',
        'yobi-yobi_move_received',
        'yobi-yobi_move_receive-square',
        'yobi-yobi_move_receive-square-2',
        'yobi-yobi_move_redo',
        'yobi-yobi_move_refresh',
        'yobi-yobi_move_refresh-2',
        'yobi-yobi_move_refresh-circle',
        'yobi-yobi_move_refresh-left-square',
        'yobi-yobi_move_refresh-right-square',
        'yobi-yobi_move_refresh-square-2',
        'yobi-yobi_move_repeat',
        'yobi-yobi_move_repeat-circle',
        'yobi-yobi_move_rotate-left',
        'yobi-yobi_move_rotate-right',
        'yobi-yobi_move_send',
        'yobi-yobi_move_send-sqaure-2',
        'yobi-yobi_move_send-square',
        'yobi-yobi_move_undo',
        'yobi-yobi_notification_bell',
        'yobi-yobi_notification_bell-bing',
        'yobi-yobi_notification_lamp-charge',
        'yobi-yobi_notification_lamp-on',
        'yobi-yobi_notification_lamp-slash',
        'yobi-yobi_notification_notification',
        'yobi-yobi_notification_notification-circle',
        'yobi-yobi_notification_notification-favorite',
        'yobi-yobi_notification_notification-status',
        'yobi-yobi_programing_code',
        'yobi-yobi_programing_code-2',
        'yobi-yobi_programing_code-circle',
        'yobi-yobi_programing_command',
        'yobi-yobi_programing_command-square',
        'yobi-yobi_programing_data',
        'yobi-yobi_programing_data-2',
        'yobi-yobi_programing_document-code',
        'yobi-yobi_programing_document-code-2',
        'yobi-yobi_programing_hashtag',
        'yobi-yobi_programing_hashtag-down',
        'yobi-yobi_programing_hashtag-up',
        'yobi-yobi_programing_hierarchy',
        'yobi-yobi_programing_hierarchy-2',
        'yobi-yobi_programing_hierarchy-3',
        'yobi-yobi_programing_hierarchy-square',
        'yobi-yobi_programing_hierarchy-square-2',
        'yobi-yobi_programing_hierarchy-square-3',
        'yobi-yobi_programing_message-programming',
        'yobi-yobi_programing_mobile-programming',
        'yobi-yobi_programing_programming-arrow',
        'yobi-yobi_programing_programming-arrows',
        'yobi-yobi_programing_scroll',
        'yobi-yobi_programing_sidebar-bottom',
        'yobi-yobi_programing_sidebar-left',
        'yobi-yobi_programing_sidebar-right',
        'yobi-yobi_programing_sidebar-top',
        'yobi-yobi_search_favorite',
        'yobi-yobi_search_favorite-2',
        'yobi-yobi_search_normal',
        'yobi-yobi_search_normal-2',
        'yobi-yobi_search_status',
        'yobi-yobi_search_status-2',
        'yobi-yobi_search_zoom-in',
        'yobi-yobi_search_zoom-in-2',
        'yobi-yobi_search_zoom-out',
        'yobi-yobi_search_zoom-out-2',
        'yobi-yobi_security_alarm',
        'yobi-yobi_security_check',
        'yobi-yobi_security_eye',
        'yobi-yobi_security_eye-slash',
        'yobi-yobi_security_finger-cricle',
        'yobi-yobi_security_finger-scan',
        'yobi-yobi_security_key',
        'yobi-yobi_security_key-square',
        'yobi-yobi_security_lock',
        'yobi-yobi_security_lock-2',
        'yobi-yobi_security_lock-circle',
        'yobi-yobi_security_lock-slash',
        'yobi-yobi_security_password-check',
        'yobi-yobi_security_radar',
        'yobi-yobi_security_scan',
        'yobi-yobi_security_scan-barcode',
        'yobi-yobi_security_scanner',
        'yobi-yobi_security_scanning',
        'yobi-yobi_security_security',
        'yobi-yobi_security_security-safe',
        'yobi-yobi_security_security-user',
        'yobi-yobi_security_shield',
        'yobi-yobi_security_shield-cross',
        'yobi-yobi_security_shield-search',
        'yobi-yobi_security_shield-security',
        'yobi-yobi_security_shield-slash',
        'yobi-yobi_security_shield-tick',
        'yobi-yobi_security_unlock',
        'yobi-yobi_settings_candle',
        'yobi-yobi_settings_candle-2',
        'yobi-yobi_settings_category',
        'yobi-yobi_settings_category-2',
        'yobi-yobi_settings_menu',
        'yobi-yobi_settings_more',
        'yobi-yobi_settings_more-2',
        'yobi-yobi_settings_setting',
        'yobi-yobi_settings_setting-2',
        'yobi-yobi_settings_setting-3',
        'yobi-yobi_settings_setting-4',
        'yobi-yobi_settings_setting-5',
        'yobi-yobi_settings_settings',
        'yobi-yobi_settings_toggle-off',
        'yobi-yobi_settings_toggle-off-circle',
        'yobi-yobi_settings_toggle-on',
        'yobi-yobi_settings_toggle-on-circle',
        'yobi-yobi_shop_bag',
        'yobi-yobi_shop_bag-2',
        'yobi-yobi_shop_bag-cross',
        'yobi-yobi_shop_bag-cross-2',
        'yobi-yobi_shop_bag-happy',
        'yobi-yobi_shop_bag-tick',
        'yobi-yobi_shop_bag-tick-2',
        'yobi-yobi_shop_bag-timer',
        'yobi-yobi_shop_barcode',
        'yobi-yobi_shop_shop',
        'yobi-yobi_shop_shop-add',
        'yobi-yobi_shop_shopping-bag',
        'yobi-yobi_shop_shopping-cart',
        'yobi-yobi_shop_shop-remove',
        'yobi-yobi_social_24-support',
        'yobi-yobi_social_dislike',
        'yobi-yobi_social_heart',
        'yobi-yobi_social_heart-add',
        'yobi-yobi_social_heart-circle',
        'yobi-yobi_social_heart-edit',
        'yobi-yobi_social_heart-remove',
        'yobi-yobi_social_heart-search',
        'yobi-yobi_social_heart-slash',
        'yobi-yobi_social_heart-tick',
        'yobi-yobi_social_like',
        'yobi-yobi_social_like-dislike',
        'yobi-yobi_social_likes',
        'yobi-yobi_social_like-shapes',
        'yobi-yobi_social_like-tag',
        'yobi-yobi_social_lovely',
        'yobi-yobi_social_magic-star',
        'yobi-yobi_social_medal',
        'yobi-yobi_social_medal-star',
        'yobi-yobi_social_message-question',
        'yobi-yobi_social_ranking',
        'yobi-yobi_social_smileys',
        'yobi-yobi_social_star',
        'yobi-yobi_social_stars',
        'yobi-yobi_social_star-slash',
        'yobi-yobi_social_unlimited',
        'yobi-yobi_text_attach-circle',
        'yobi-yobi_text_attach-square',
        'yobi-yobi_text_eraser',
        'yobi-yobi_text_firstline',
        'yobi-yobi_text_language-circle',
        'yobi-yobi_text_language-square',
        'yobi-yobi_text_link',
        'yobi-yobi_text_link-2',
        'yobi-yobi_text_link-3',
        'yobi-yobi_text_link-4',
        'yobi-yobi_text_link-circle',
        'yobi-yobi_text_link-square',
        'yobi-yobi_text_maximize',
        'yobi-yobi_text_paperclip',
        'yobi-yobi_text_paperclip-2',
        'yobi-yobi_text_pharagraphspacing',
        'yobi-yobi_text_quote-down',
        'yobi-yobi_text_quote-down-circle',
        'yobi-yobi_text_quote-down-square',
        'yobi-yobi_text_quote-up',
        'yobi-yobi_text_quote-up-circle',
        'yobi-yobi_text_quote-up-square',
        'yobi-yobi_text_smallcaps',
        'yobi-yobi_text_text',
        'yobi-yobi_text_textalign-center',
        'yobi-yobi_text_textalign-justifycenter',
        'yobi-yobi_text_textalign-justifyleft',
        'yobi-yobi_text_textalign-justifyright',
        'yobi-yobi_text_textalign-left',
        'yobi-yobi_text_textalign-right',
        'yobi-yobi_text_text-block',
        'yobi-yobi_text_text-bold',
        'yobi-yobi_text_text-italic',
        'yobi-yobi_text_text-underline',
        'yobi-yobi_text_translate',
        'yobi-yobi_time_calendar',
        'yobi-yobi_time_calendar-2',
        'yobi-yobi_time_calendar-add',
        'yobi-yobi_time_calendar-circle',
        'yobi-yobi_time_calendar-edit',
        'yobi-yobi_time_calendar-remove',
        'yobi-yobi_time_calendar-search',
        'yobi-yobi_time_calendar-tick',
        'yobi-yobi_time_clock',
        'yobi-yobi_time_security-time',
        'yobi-yobi_time_time',
        'yobi-yobi_time_timer',
        'yobi-yobi_time_timer-pause',
        'yobi-yobi_time_timer-start',
        'yobi-yobi_user_people',
        'yobi-yobi_user_profile',
        'yobi-yobi_user_profile-2user',
        'yobi-yobi_user_profile-add',
        'yobi-yobi_user_profile-circle',
        'yobi-yobi_user_profile-delete',
        'yobi-yobi_user_profile-remove',
        'yobi-yobi_user_profile-tick',
        'yobi-yobi_user_tag-user',
        'yobi-yobi_user_user',
        'yobi-yobi_user_user-add',
        'yobi-yobi_user_user-cirlce-add',
        'yobi-yobi_user_user-edit',
        'yobi-yobi_user_user-minus',
        'yobi-yobi_user_user-octagon',
        'yobi-yobi_user_user-remove',
        'yobi-yobi_user_user-search',
        'yobi-yobi_user_user-square',
        'yobi-yobi_user_user-tag',
        'yobi-yobi_user_user-tick',
        'yobi-yobi_weather_cloud',
        'yobi-yobi_weather_cloud-cross',
        'yobi-yobi_weather_cloud-drizzle',
        'yobi-yobi_weather_cloud-fog',
        'yobi-yobi_weather_cloud-lightning',
        'yobi-yobi_weather_cloud-minus',
        'yobi-yobi_weather_cloud-notif',
        'yobi-yobi_weather_cloud-plus',
        'yobi-yobi_weather_cloud-snow',
        'yobi-yobi_weather_cloud-sunny',
        'yobi-yobi_weather_drop',
        'yobi-yobi_weather_flash',
        'yobi-yobi_weather_moon',
        'yobi-yobi_weather_sun',
        'yobi-yobi_weather_sun-2',
        'yobi-yobi_weather_sun-fog',
        'yobi-yobi_weather_wind',
        'yobi-yobi_weather_wind-2',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::career.career'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.Enumeration<
      ['Bay Area, CA', 'Plano, TX', 'Remote']
    >;
    nextjs: Schema.Attribute.Component<'shared.nextjs-comp', false>;
    overview: Schema.Attribute.RichText;
    publishedAt: Schema.Attribute.DateTime;
    requirements: Schema.Attribute.RichText;
    responsibilities: Schema.Attribute.RichText;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['Internship', 'Temporary', 'Contractor', 'Part-Time', 'Full-Time']
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCaseStudyCaseStudy extends Struct.CollectionTypeSchema {
  collectionName: 'case_studies';
  info: {
    description: '';
    displayName: 'Case Study';
    pluralName: 'case-studies';
    singularName: 'case-study';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    agents: Schema.Attribute.Relation<'manyToMany', 'api::ai-agent.ai-agent'>;
    content: Schema.Attribute.RichText;
    content2: Schema.Attribute.RichText;
    content3: Schema.Attribute.RichText;
    contentquote: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    excerpt: Schema.Attribute.Text;
    feature: Schema.Attribute.Relation<'manyToMany', 'api::feature.feature'>;
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    heroMedia: Schema.Attribute.Component<'single.hero-media', false>;
    iconBox: Schema.Attribute.Component<'shared.icon-box', true>;
    imageCaption: Schema.Attribute.Component<'shared.image-caption', true>;
    industries: Schema.Attribute.Relation<
      'manyToMany',
      'api::industry.industry'
    >;
    integrations: Schema.Attribute.Relation<
      'manyToMany',
      'api::integration.integration'
    >;
    layoutStyle: Schema.Attribute.Enumeration<
      ['image', 'gallery', 'video', 'multiple']
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::case-study.case-study'
    > &
      Schema.Attribute.Private;
    nextjs: Schema.Attribute.Component<'shared.nextjs-comp', false>;
    pubDate: Schema.Attribute.Date;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID;
    stats: Schema.Attribute.Component<'shared.stat-box', true>;
    testimonials: Schema.Attribute.Relation<
      'manyToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ApiFeatureFeature extends Struct.CollectionTypeSchema {
  collectionName: 'features';
  info: {
    description: '';
    displayName: 'Product';
    pluralName: 'features';
    singularName: 'feature';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articles: Schema.Attribute.Relation<'manyToMany', 'api::article.article'>;
    caseStudy: Schema.Attribute.Relation<
      'manyToMany',
      'api::case-study.case-study'
    >;
    content: Schema.Attribute.RichText;
    content2: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    excerpt: Schema.Attribute.Text;
    faq: Schema.Attribute.Component<'shared.faq', true>;
    featuredIcon: Schema.Attribute.Enumeration<
      [
        'yobi_a_space',
        'yobi_archive_archive-add',
        'yobi_archive_archive-minus',
        'yobi_archive_archive-slash',
        'yobi_archive_archive-tick',
        'yobi_archive_book-saved',
        'yobi_archive_book-square',
        'yobi_archive_frame',
        'yobi_archive_receipt-square',
        'yobi_archive_save-2',
        'yobi_archive_save-add',
        'yobi_archive_save-minus',
        'yobi_archive_save-remove',
        'yobi_art_additem',
        'yobi_art_backward-item',
        'yobi_art_bezier',
        'yobi_art_blend',
        'yobi_art_blend-2',
        'yobi_art_blur',
        'yobi_art_brush',
        'yobi_art_brush-2',
        'yobi_art_brush-3',
        'yobi_art_brush-4',
        'yobi_art_bucket-circle',
        'yobi_art_bucket-square',
        'yobi_art_colorfilter',
        'yobi_art_colors-square',
        'yobi_art_color-swatch',
        'yobi_art_component',
        'yobi_art_copy',
        'yobi_art_copy-success',
        'yobi_art_designtools',
        'yobi_art_eraser',
        'yobi_art_flash-circle',
        'yobi_art_forward-item',
        'yobi_art_glass',
        'yobi_art_group',
        'yobi_art_group-2',
        'yobi_art_layer',
        'yobi_art_lifebuoy',
        'yobi_art_magicpen',
        'yobi_art_main-component',
        'yobi_art_mask',
        'yobi_art_mask-2',
        'yobi_art_mask-3',
        'yobi_art_omega-circle',
        'yobi_art_omega-square',
        'yobi_art_paintbucket',
        'yobi_art_path',
        'yobi_art_path-2',
        'yobi_art_path-square',
        'yobi_art_pen-add',
        'yobi_art_pen-close',
        'yobi_art_pen-remove',
        'yobi_art_pen-tool',
        'yobi_art_pen-tool-2',
        'yobi_art_recovery-convert',
        'yobi_art_rulerpen',
        'yobi_art_ruler',
        'yobi_art_scissor',
        'yobi_art_shapes',
        'yobi_art_shapes-2',
        'yobi_art_size',
        'yobi_biz_activity',
        'yobi_biz_chart',
        'yobi_biz_chart-2',
        'yobi_biz_chart-3',
        'yobi_biz_chart-4',
        'yobi_biz_chart-success',
        'yobi_biz_diagram',
        'yobi_biz_favorite-chart',
        'yobi_biz_frame',
        'yobi_biz_graph',
        'yobi_biz_hashtag',
        'yobi_biz_health',
        'yobi_biz_home-hashtag',
        'yobi_biz_home-trend-down',
        'yobi_biz_home-trend-up',
        'yobi_biz_personalcard',
        'yobi_biz_presention-chart',
        'yobi_biz_status-up',
        'yobi_biz_trend-down',
        'yobi_biz_trend-up',
        'yobi_building_bank',
        'yobi_building_building-2',
        'yobi_building_building-3',
        'yobi_building_building-4',
        'yobi_building_buildings',
        'yobi_building_buliding',
        'yobi_building_courthouse',
        'yobi_building_default',
        'yobi_building_hospital',
        'yobi_building_house',
        'yobi_building_house-2',
        'yobi_call',
        'yobi_call_add',
        'yobi_call_calling',
        'yobi_call_incoming',
        'yobi_call_minus',
        'yobi_call_outgoing',
        'yobi_call_received',
        'yobi_call_remove',
        'yobi_call_slash',
        'yobi_car_airplane',
        'yobi_car_airplane-square',
        'yobi_car_bus',
        'yobi_car_car',
        'yobi_car_driving',
        'yobi_car_gas-station',
        'yobi_car_ship',
        'yobi_car_smart-car',
        'yobi_chat_device-message',
        'yobi_chat_direct',
        'yobi_chat_directbox-default',
        'yobi_chat_directbox-notif',
        'yobi_chat_directbox-receive',
        'yobi_chat_directbox-send',
        'yobi_chat_direct-inbox',
        'yobi_chat_direct-normal',
        'yobi_chat_direct-notification',
        'yobi_chat_direct-send',
        'yobi_chat_message',
        'yobi_chat_message-2',
        'yobi_chat_message-add',
        'yobi_chat_message-add-2',
        'yobi_chat_message-circle',
        'yobi_chat_message-edit',
        'yobi_chat_message-favorite',
        'yobi_chat_message-minus',
        'yobi_chat_message-notif',
        'yobi_chat_message-remove',
        'yobi_chat_messages',
        'yobi_chat_messages-2',
        'yobi_chat_messages-3',
        'yobi_chat_messages-4',
        'yobi_chat_message-search',
        'yobi_chat_message-square',
        'yobi_chat_message-text',
        'yobi_chat_message-text-2',
        'yobi_chat_message-tick',
        'yobi_chat_message-time',
        'yobi_chat_sms',
        'yobi_chat_sms-edit',
        'yobi_chat_sms-notification',
        'yobi_chat_sms-search',
        'yobi_chat_sms-star',
        'yobi_chat_sms-tracking',
        'yobi_content_archive-book',
        'yobi_content_bill',
        'yobi_content_clipboard-close',
        'yobi_content_clipboard-export',
        'yobi_content_clipboard-import',
        'yobi_content_clipboard-text',
        'yobi_content_clipboard-tick',
        'yobi_content_copyright',
        'yobi_content_creative-commons',
        'yobi_content_document',
        'yobi_content_document-cloud',
        'yobi_content_document-copy',
        'yobi_content_document-download',
        'yobi_content_document-favorite',
        'yobi_content_document-filter',
        'yobi_content_document-forward',
        'yobi_content_document-like',
        'yobi_content_document-normal',
        'yobi_content_document-previous',
        'yobi_content_document-sketch',
        'yobi_content_document-text',
        'yobi_content_document-text-2',
        'yobi_content_document-upload',
        'yobi_content_edit',
        'yobi_content_edit-2',
        'yobi_content_menu-board',
        'yobi_content_note',
        'yobi_content_note-2',
        'yobi_content_note-add',
        'yobi_content_note-favorite',
        'yobi_content_note-remove',
        'yobi_content_note-text',
        'yobi_content_stickynote',
        'yobi_content_task',
        'yobi_content_task-square',
        'yobi_crypto_bitcoin-card',
        'yobi_crypto_bitcoin-convert',
        'yobi_crypto_bitcoin-refresh',
        'yobi_crypto_buy-crypto',
        'yobi_crypto_card-coin',
        'yobi_crypto_trade',
        'yobi_delivery_3d-cube-scan',
        'yobi_delivery_3d-rotate',
        'yobi_delivery_3d-square',
        'yobi_delivery_box',
        'yobi_delivery_box-2',
        'yobi_delivery_box-add',
        'yobi_delivery_box-remove',
        'yobi_delivery_box-search',
        'yobi_delivery_box-tick',
        'yobi_delivery_box-time',
        'yobi_delivery_convert-3d-cube',
        'yobi_delivery_group',
        'yobi_delivery_groups',
        'yobi_delivery_truck-remove',
        'yobi_delivery_truck-tick',
        'yobi_delivery_truck-time',
        'yobi_folder_2',
        'yobi_folder_add',
        'yobi_folder_cloud',
        'yobi_folder_cross',
        'yobi_folder_favorite',
        'yobi_folder_folder',
        'yobi_folder_minus',
        'yobi_folder_open',
        'yobi_grid_3square',
        'yobi_grid_align-bottom',
        'yobi_grid_align-horizontally',
        'yobi_grid_align-left',
        'yobi_grid_align-right',
        'yobi_grid_align-vertically',
        'yobi_grid_convertshape',
        'yobi_grid_convertshape-2',
        'yobi_grid_crop',
        'yobi_grid_element-1',
        'yobi_grid_element-2',
        'yobi_grid_element-3',
        'yobi_grid_element-4',
        'yobi_grid_element-equal',
        'yobi_grid_element-plus',
        'yobi_grid_fatrows',
        'yobi_grid_format-circle',
        'yobi_grid_format-square',
        'yobi_grid_frame',
        'yobi_grid_grid-1',
        'yobi_grid_grid-2',
        'yobi_grid_grid-3',
        'yobi_grid_grid-4',
        'yobi_grid_grid-5',
        'yobi_grid_grid-6',
        'yobi_grid_grid-7',
        'yobi_grid_grid-8',
        'yobi_grid_grid-9',
        'yobi_grid_grid-edit',
        'yobi_grid_grid-eraser',
        'yobi_grid_grid-lock',
        'yobi_grid_kanban',
        'yobi_grid_maximize',
        'yobi_grid_maximize-2',
        'yobi_grid_maximize-3',
        'yobi_grid_maximize-4',
        'yobi_grid_maximize-5',
        'yobi_grid_rotate-left',
        'yobi_grid_rotate-right',
        'yobi_grid_row-horizontal',
        'yobi_grid_row-vertical',
        'yobi_grid_slider-horizontal',
        'yobi_grid_slider-horizontal-2',
        'yobi_grid_slider-vertical',
        'yobi_grid_slider-vertical-2',
        'yobi_hardware_airdrop',
        'yobi_hardware_airpod',
        'yobi_hardware_airpods',
        'yobi_hardware_bluetooth',
        'yobi_hardware_bluetooth-2',
        'yobi_hardware_bluetooth-circle',
        'yobi_hardware_bluetooth-rectangle',
        'yobi_hardware_clock',
        'yobi_hardware_cloud-add',
        'yobi_hardware_cloud-change',
        'yobi_hardware_cloud-connection',
        'yobi_hardware_cloud-remove',
        'yobi_hardware_cpu',
        'yobi_hardware_cpu-charge',
        'yobi_hardware_cpu-setting',
        'yobi_hardware_devices',
        'yobi_hardware_driver',
        'yobi_hardware_driver-2',
        'yobi_hardware_driver-refresh',
        'yobi_hardware_electricity',
        'yobi_hardware_external-drive',
        'yobi_hardware_folder-connection',
        'yobi_hardware_game',
        'yobi_hardware_gameboy',
        'yobi_hardware_headphone',
        'yobi_hardware_headphones',
        'yobi_hardware_keyboard',
        'yobi_hardware_keyboard-open',
        'yobi_hardware_lamp',
        'yobi_hardware_microscope',
        'yobi_hardware_mirroring-screen',
        'yobi_hardware_monitor',
        'yobi_hardware_monitor-mobbile',
        'yobi_hardware_monitor-recorder',
        'yobi_hardware_mouse',
        'yobi_hardware_music-play',
        'yobi_hardware_printer',
        'yobi_hardware_printer-slash',
        'yobi_hardware_ram',
        'yobi_hardware_ram-2',
        'yobi_hardware_simcard',
        'yobi_hardware_simcard-2',
        'yobi_hardware_simcard-3',
        'yobi_hardware_speaker',
        'yobi_hardware_watch',
        'yobi_hardware_watch-status',
        'yobi_hardware_weight',
        'yobi_hardware-mobile',
        'yobi_huh_aquarius',
        'yobi_huh_gemini',
        'yobi_huh_gemini-2',
        'yobi_huh_man',
        'yobi_huh_sagittarius',
        'yobi_huh_woman',
        'yobi_learn_award',
        'yobi_learn_book',
        'yobi_learn_book-2',
        'yobi_learn_bookmark',
        'yobi_learn_bookmark-2',
        'yobi_learn_briefcase',
        'yobi_learn_brifecase-cross',
        'yobi_learn_brifecase-tick',
        'yobi_learn_brifecase-timer',
        'yobi_learn_calculator',
        'yobi_learn_clipboard',
        'yobi_learn_gift',
        'yobi_learn_note',
        'yobi_learn_note-2',
        'yobi_learn_teacher',
        'yobi_logo_aave-aave',
        'yobi_logo_android',
        'yobi_logo_ankr-ankr',
        'yobi_logo_apple',
        'yobi_logo_augur-rep',
        'yobi_logo_autonio-niox',
        'yobi_logo_avalanche-avax',
        'yobi_logo_be',
        'yobi_logo_binance-coin-bnb',
        'yobi_logo_binance-usd-busd',
        'yobi_logo_bitcoin-btc',
        'yobi_logo_blogger',
        'yobi_logo_bootsrap',
        'yobi_logo_cardano-ada',
        'yobi_logo_celo-celo',
        'yobi_logo_celsius-cel',
        'yobi_logo_chainlink-link',
        'yobi_logo_civic-cvc',
        'yobi_logo_dai-dai',
        'yobi_logo_dash-dash',
        'yobi_logo_decred-dcr',
        'yobi_logo_dent-dent',
        'yobi_logo_dropbox',
        'yobi_logo_educare-ekt',
        'yobi_logo_emercoin-emc',
        'yobi_logo_enjin-coin-enj',
        'yobi_logo_eos-eos',
        'yobi_logo_ethereum-eth',
        'yobi_logo_ethereum-classic-etc',
        'yobi_logo_facebook',
        'yobi_logo_figma',
        'yobi_logo_figma-2',
        'yobi_logo_frame',
        'yobi_logo_frame-2',
        'yobi_logo_framer',
        'yobi_logo_ftx-token-ftt',
        'yobi_logo_google',
        'yobi_logo_google-2',
        'yobi_logo_google-play',
        'yobi_logo_harmony-one',
        'yobi_logo_hedera-hashgraph-hbar',
        'yobi_logo_hex-hex',
        'yobi_logo_html-3',
        'yobi_logo_html-5',
        'yobi_logo_huobi-token-ht',
        'yobi_logo_icon-icx',
        'yobi_logo_illustrator',
        'yobi_logo_iost-iost',
        'yobi_logo_java-script',
        'yobi_logo_js',
        'yobi_logo_kyber-network-knc',
        'yobi_logo_litecoinltc',
        'yobi_logo_maker-mkr',
        'yobi_logo_messenger',
        'yobi_logo_monero-xmr',
        'yobi_logo_nebulas-nas',
        'yobi_logo_nem-xem',
        'yobi_logo_ocean-protocol-ocean',
        'yobi_logo_okb-okb',
        'yobi_logo_ontology-ont',
        'yobi_logo_paypal',
        'yobi_logo_photoshop',
        'yobi_logo_polkadot-dot',
        'yobi_logo_polygon-matic',
        'yobi_logo_python',
        'yobi_logo_quant-qnt',
        'yobi_logo_siacoin-sc',
        'yobi_logo_slack',
        'yobi_logo_snapchat',
        'yobi_logo_solana-sol',
        'yobi_logo_spotify',
        'yobi_logo_stacks-stx',
        'yobi_logo_stellar-xlm',
        'yobi_logo_tenx-pay',
        'yobi_logo_tether-usdt',
        'yobi_logo_the-graph-grt',
        'yobi_logo_theta-theta',
        'yobi_logo_thorchain-rune',
        'yobi_logo_trello',
        'yobi_logo_triangle',
        'yobi_logo_trontron-trx',
        'yobi_logo_twitch',
        'yobi_logo_usd-coin-usdc',
        'yobi_logo_velas-vlx',
        'yobi_logo_vibe-vibe',
        'yobi_logo_wanchain-wan',
        'yobi_logo_wanchain-wan-2',
        'yobi_logo_whatsapp',
        'yobi_logo_windows',
        'yobi_logo_wing-wing',
        'yobi_logo_xd',
        'yobi_logo_xiaomi',
        'yobi_logo_xrp-xrp',
        'yobi_logo_youtube',
        'yobi_logo_zel-zel',
        'yobi_logo_zoom',
        'yobi_map_arrow',
        'yobi_map_arrow-square',
        'yobi_map_direct-down',
        'yobi_map_direct-left',
        'yobi_map_direct-right',
        'yobi_map_direct-up',
        'yobi_map_discover',
        'yobi_map_global',
        'yobi_map_global-edit',
        'yobi_map_global-refresh',
        'yobi_map_global-search',
        'yobi_map_gps',
        'yobi_map_gps-slash',
        'yobi_map_location',
        'yobi_map_location-add',
        'yobi_map_location-cross',
        'yobi_map_location-minus',
        'yobi_map_location-slash',
        'yobi_map_location-tick',
        'yobi_map_map',
        'yobi_map_map-2',
        'yobi_map_picture-frame',
        'yobi_map_radar',
        'yobi_map_radar-2',
        'yobi_map_route-square',
        'yobi_map_routing',
        'yobi_map_routing-2',
        'yobi_media_audio-square',
        'yobi_media_backward',
        'yobi_media_backward-5-seconds',
        'yobi_media_backward-10-seconds',
        'yobi_media_backward-15-seconds',
        'yobi_media_camera',
        'yobi_media_camera-slash',
        'yobi_media_devices',
        'yobi_media_forward',
        'yobi_media_forward-5-seconds',
        'yobi_media_forward-10-seconds',
        'yobi_media_forward-15-seconds',
        'yobi_media_gallery',
        'yobi_media_gallery-add',
        'yobi_media_gallery-edit',
        'yobi_media_gallery-export',
        'yobi_media_gallery-favorite',
        'yobi_media_gallery-import',
        'yobi_media_gallery-remove',
        'yobi_media_gallery-slash',
        'yobi_media_gallery-tick',
        'yobi_media_group',
        'yobi_media_image',
        'yobi_media_maximize-circle',
        'yobi_media_microphone',
        'yobi_media_microphone-2',
        'yobi_media_microphone-slash',
        'yobi_media_microphone-slash-2',
        'yobi_media_mini-music-sqaure',
        'yobi_media_music',
        'yobi_media_music-circle',
        'yobi_media_music-dashboard',
        'yobi_media_music-filter',
        'yobi_media_music-library-2',
        'yobi_media_musicnote',
        'yobi_media_music-playlist',
        'yobi_media_music-square',
        'yobi_media_music-square-add',
        'yobi_media_music-square-remove',
        'yobi_media_music-square-search',
        'yobi_media_next',
        'yobi_media_note-square',
        'yobi_media_pause',
        'yobi_media_pause-circle',
        'yobi_media_play',
        'yobi_media_play-add',
        'yobi_media_play-circle',
        'yobi_media_play-cricle',
        'yobi_media_play-remove',
        'yobi_media_previous',
        'yobi_media_radio',
        'yobi_media_record',
        'yobi_media_record-circle',
        'yobi_media_repeate-music',
        'yobi_media_repeate-one',
        'yobi_media_scissor',
        'yobi_media_screenmirroring',
        'yobi_media_stop',
        'yobi_media_stop-circle',
        'yobi_media_subtitle',
        'yobi_media_video',
        'yobi_media_video-add',
        'yobi_media_video-circle',
        'yobi_media_video-horizontal',
        'yobi_media_video-octagon',
        'yobi_media_video-play',
        'yobi_media_video-remove',
        'yobi_media_video-slash',
        'yobi_media_video-square',
        'yobi_media_video-tick',
        'yobi_media_video-time',
        'yobi_media_video-vertical',
        'yobi_media_voice-cricle',
        'yobi_media_voice-square',
        'yobi_media_volume-cross',
        'yobi_media_volume-high',
        'yobi_media_volume-low',
        'yobi_media_volume-low-2',
        'yobi_media_volume-mute',
        'yobi_media_volume-slash',
        'yobi_media_volume-up',
        'yobi_misc_3dcube',
        'yobi_misc_add',
        'yobi_misc_add-circle',
        'yobi_misc_add-square',
        'yobi_misc_archive',
        'yobi_misc_autobrightness',
        'yobi_misc_battery-2full',
        'yobi_misc_battery-charging',
        'yobi_misc_battery-disable',
        'yobi_misc_battery-empty',
        'yobi_misc_battery-empty-2',
        'yobi_misc_battery-full',
        'yobi_misc_box-2',
        'yobi_misc_broom',
        'yobi_misc_bubble',
        'yobi_misc_cake',
        'yobi_misc_cd',
        'yobi_misc_chart',
        'yobi_misc_chrome',
        'yobi_misc_close-circle',
        'yobi_misc_close-square',
        'yobi_misc_coffee',
        'yobi_misc_computing',
        'yobi_misc_crown',
        'yobi_misc_crown-2',
        'yobi_misc_cup',
        'yobi_misc_danger',
        'yobi_misc_diamonds',
        'yobi_misc_discover',
        'yobi_misc_emoji-happy',
        'yobi_misc_emoji-normal',
        'yobi_misc_emoji-sad',
        'yobi_misc_filter',
        'yobi_misc_filter-add',
        'yobi_misc_filter-edit',
        'yobi_misc_filter-remove',
        'yobi_misc_filter-search',
        'yobi_misc_filter-square',
        'yobi_misc_filter-tick',
        'yobi_misc_flag',
        'yobi_misc_flag-2',
        'yobi_misc_flash',
        'yobi_misc_flash-circle',
        'yobi_misc_flash-slash',
        'yobi_misc_ghost',
        'yobi_misc_glass',
        'yobi_misc_grammerly',
        'yobi_misc_happyemoji',
        'yobi_misc_home',
        'yobi_misc_home-2',
        'yobi_misc_home-3',
        'yobi_misc_home-wifi',
        'yobi_misc_info-circle',
        'yobi_misc_information',
        'yobi_misc_instagram',
        'yobi_misc_judge',
        'yobi_misc_lamp',
        'yobi_misc_level',
        'yobi_misc_menu',
        'yobi_misc_milk',
        'yobi_misc_minus',
        'yobi_misc_minus-cirlce',
        'yobi_misc_minus-square',
        'yobi_misc_mirror',
        'yobi_misc_more-circle',
        'yobi_misc_more-square',
        'yobi_misc_mouse',
        'yobi_misc_mouse-circle',
        'yobi_misc_mouse-square',
        'yobi_misc_no',
        'yobi_misc_no-2',
        'yobi_misc_pet',
        'yobi_misc_ranking',
        'yobi_misc_reserve',
        'yobi_misc_safe-home',
        'yobi_misc_send',
        'yobi_misc_send-2',
        'yobi_misc_share',
        'yobi_misc_signpost',
        'yobi_misc_slash',
        'yobi_misc_slider',
        'yobi_misc_smart-home',
        'yobi_misc_sort',
        'yobi_misc_sound',
        'yobi_misc_speedometer',
        'yobi_misc_status',
        'yobi_misc_sticker',
        'yobi_misc_story',
        'yobi_misc_tag-cross',
        'yobi_misc_tag-right',
        'yobi_misc_tick-circle',
        'yobi_misc_tick-square',
        'yobi_misc_trash',
        'yobi_misc_tree',
        'yobi_misc_triangle',
        'yobi_misc_trush-square',
        'yobi_misc_verify',
        'yobi_misc_warning-2',
        'yobi_misc_weight',
        'yobi_misc_wifi',
        'yobi_misc_wifi-square',
        'yobi_money_archive',
        'yobi_money_card',
        'yobi_money_card-add',
        'yobi_money_card-edit',
        'yobi_money_card-pos',
        'yobi_money_card-receive',
        'yobi_money_card-remove',
        'yobi_money_card-remove-2',
        'yobi_money_cards',
        'yobi_money_card-send',
        'yobi_money_card-slash',
        'yobi_money_card-tick',
        'yobi_money_card-tick-2',
        'yobi_money_chart-square',
        'yobi_money_coin',
        'yobi_money_coin-2',
        'yobi_money_discount-circle',
        'yobi_money_discount-shape',
        'yobi_money_document',
        'yobi_money_dollar-circle',
        'yobi_money_dollar-square',
        'yobi_money_empty-wallet',
        'yobi_money_empty-wallet-add',
        'yobi_money_empty-wallet-change',
        'yobi_money_empty-wallet-remove',
        'yobi_money_empty-wallet-tick',
        'yobi_money_empty-wallet-time',
        'yobi_money_group',
        'yobi_money_group-2',
        'yobi_money_math',
        'yobi_money_money',
        'yobi_money_money-2',
        'yobi_money_money-3',
        'yobi_money_money-4',
        'yobi_money_money-add',
        'yobi_money_money-change',
        'yobi_money_money-forbidden',
        'yobi_money_money-recive',
        'yobi_money_money-remove',
        'yobi_money_moneys',
        'yobi_money_money-send',
        'yobi_money_money-tick',
        'yobi_money_money-time',
        'yobi_money_percentage-square',
        'yobi_money_receipt',
        'yobi_money_receipt-2',
        'yobi_money_receipt-3',
        'yobi_money_receipt-4',
        'yobi_money_receipt-add',
        'yobi_money_receipt-discount',
        'yobi_money_receipt-disscount',
        'yobi_money_receipt-edit',
        'yobi_money_receipt-item',
        'yobi_money_receipt-minus',
        'yobi_money_receipt-search',
        'yobi_money_receipt-text',
        'yobi_money_security-card',
        'yobi_money_strongbox',
        'yobi_money_strongbox-2',
        'yobi_money_tag',
        'yobi_money_tag-2',
        'yobi_money_ticket',
        'yobi_money_ticket-2',
        'yobi_money_ticket-discount',
        'yobi_money_ticket-expired',
        'yobi_money_ticket-star',
        'yobi_money_transaction-minus',
        'yobi_money_wallet',
        'yobi_money_wallet-2',
        'yobi_money_wallet-3',
        'yobi_money_wallet-4',
        'yobi_money_wallet-add',
        'yobi_money_wallet-add-2',
        'yobi_money_wallet-check',
        'yobi_money_wallet-minus',
        'yobi_money_wallet-money',
        'yobi_money_wallet-remove',
        'yobi_money_wallet-search',
        'yobi_move_arrange-circle',
        'yobi_move_arrange-circle-2',
        'yobi_move_arrange-square',
        'yobi_move_arrange-square-2',
        'yobi_move_arrow-2',
        'yobi_move_arrow-3',
        'yobi_move_arrow-circle-down',
        'yobi_move_arrow-circle-left',
        'yobi_move_arrow-circle-right',
        'yobi_move_arrow-down',
        'yobi_move_arrow-down-2',
        'yobi_move_arrow-down-3',
        'yobi_move_arrow-down-4',
        'yobi_move_arrow-left',
        'yobi_move_arrow-left-2',
        'yobi_move_arrow-left-3',
        'yobi_move_arrow-left-4',
        'yobi_move_arrow-right',
        'yobi_move_arrow-right-2',
        'yobi_move_arrow-right-3',
        'yobi_move_arrow-right-4',
        'yobi_move_arrow-square-down',
        'yobi_move_arrow-square-left',
        'yobi_move_arrow-square-right',
        'yobi_move_arrow-square-up',
        'yobi_move_arrow-swap-horizontal',
        'yobi_move_arrow-up',
        'yobi_move_arrow-up-2',
        'yobi_move_arrow-up-3',
        'yobi_move_arrow-up-4',
        'yobi_move_back-square',
        'yobi_move_convert',
        'yobi_move_export',
        'yobi_move_export-2',
        'yobi_move_export-3',
        'yobi_move_export-4',
        'yobi_move_forward-square',
        'yobi_move_frame',
        'yobi_move_frame-2',
        'yobi_move_frame-3',
        'yobi_move_import',
        'yobi_move_import-2',
        'yobi_move_import-3',
        'yobi_move_login',
        'yobi_move_login-2',
        'yobi_move_logout',
        'yobi_move_logout-2',
        'yobi_move_received',
        'yobi_move_receive-square',
        'yobi_move_receive-square-2',
        'yobi_move_redo',
        'yobi_move_refresh',
        'yobi_move_refresh-2',
        'yobi_move_refresh-circle',
        'yobi_move_refresh-left-square',
        'yobi_move_refresh-right-square',
        'yobi_move_refresh-square-2',
        'yobi_move_repeat',
        'yobi_move_repeat-circle',
        'yobi_move_rotate-left',
        'yobi_move_rotate-right',
        'yobi_move_send',
        'yobi_move_send-sqaure-2',
        'yobi_move_send-square',
        'yobi_move_undo',
        'yobi_notification_bell',
        'yobi_notification_bell-bing',
        'yobi_notification_lamp-charge',
        'yobi_notification_lamp-on',
        'yobi_notification_lamp-slash',
        'yobi_notification_notification',
        'yobi_notification_notification-circle',
        'yobi_notification_notification-favorite',
        'yobi_notification_notification-status',
        'yobi_programing_code',
        'yobi_programing_code-2',
        'yobi_programing_code-circle',
        'yobi_programing_command',
        'yobi_programing_command-square',
        'yobi_programing_data',
        'yobi_programing_data-2',
        'yobi_programing_document-code',
        'yobi_programing_document-code-2',
        'yobi_programing_hashtag',
        'yobi_programing_hashtag-down',
        'yobi_programing_hashtag-up',
        'yobi_programing_hierarchy',
        'yobi_programing_hierarchy-2',
        'yobi_programing_hierarchy-3',
        'yobi_programing_hierarchy-square',
        'yobi_programing_hierarchy-square-2',
        'yobi_programing_hierarchy-square-3',
        'yobi_programing_message-programming',
        'yobi_programing_mobile-programming',
        'yobi_programing_programming-arrow',
        'yobi_programing_programming-arrows',
        'yobi_programing_scroll',
        'yobi_programing_sidebar-bottom',
        'yobi_programing_sidebar-left',
        'yobi_programing_sidebar-right',
        'yobi_programing_sidebar-top',
        'yobi_search_favorite',
        'yobi_search_favorite-2',
        'yobi_search_normal',
        'yobi_search_normal-2',
        'yobi_search_status',
        'yobi_search_status-2',
        'yobi_search_zoom-in',
        'yobi_search_zoom-in-2',
        'yobi_search_zoom-out',
        'yobi_search_zoom-out-2',
        'yobi_security_alarm',
        'yobi_security_check',
        'yobi_security_eye',
        'yobi_security_eye-slash',
        'yobi_security_finger-cricle',
        'yobi_security_finger-scan',
        'yobi_security_key',
        'yobi_security_key-square',
        'yobi_security_lock',
        'yobi_security_lock-2',
        'yobi_security_lock-circle',
        'yobi_security_lock-slash',
        'yobi_security_password-check',
        'yobi_security_radar',
        'yobi_security_scan',
        'yobi_security_scan-barcode',
        'yobi_security_scanner',
        'yobi_security_scanning',
        'yobi_security_security',
        'yobi_security_security-safe',
        'yobi_security_security-user',
        'yobi_security_shield',
        'yobi_security_shield-cross',
        'yobi_security_shield-search',
        'yobi_security_shield-security',
        'yobi_security_shield-slash',
        'yobi_security_shield-tick',
        'yobi_security_unlock',
        'yobi_settings_candle',
        'yobi_settings_candle-2',
        'yobi_settings_category',
        'yobi_settings_category-2',
        'yobi_settings_menu',
        'yobi_settings_more',
        'yobi_settings_more-2',
        'yobi_settings_setting',
        'yobi_settings_setting-2',
        'yobi_settings_setting-3',
        'yobi_settings_setting-4',
        'yobi_settings_setting-5',
        'yobi_settings_settings',
        'yobi_settings_toggle-off',
        'yobi_settings_toggle-off-circle',
        'yobi_settings_toggle-on',
        'yobi_settings_toggle-on-circle',
        'yobi_shop_bag',
        'yobi_shop_bag-2',
        'yobi_shop_bag-cross',
        'yobi_shop_bag-cross-2',
        'yobi_shop_bag-happy',
        'yobi_shop_bag-tick',
        'yobi_shop_bag-tick-2',
        'yobi_shop_bag-timer',
        'yobi_shop_barcode',
        'yobi_shop_shop',
        'yobi_shop_shop-add',
        'yobi_shop_shopping-bag',
        'yobi_shop_shopping-cart',
        'yobi_shop_shop-remove',
        'yobi_social_24-support',
        'yobi_social_dislike',
        'yobi_social_heart',
        'yobi_social_heart-add',
        'yobi_social_heart-circle',
        'yobi_social_heart-edit',
        'yobi_social_heart-remove',
        'yobi_social_heart-search',
        'yobi_social_heart-slash',
        'yobi_social_heart-tick',
        'yobi_social_like',
        'yobi_social_like-dislike',
        'yobi_social_likes',
        'yobi_social_like-shapes',
        'yobi_social_like-tag',
        'yobi_social_lovely',
        'yobi_social_magic-star',
        'yobi_social_medal',
        'yobi_social_medal-star',
        'yobi_social_message-question',
        'yobi_social_ranking',
        'yobi_social_smileys',
        'yobi_social_star',
        'yobi_social_stars',
        'yobi_social_star-slash',
        'yobi_social_unlimited',
        'yobi_text_attach-circle',
        'yobi_text_attach-square',
        'yobi_text_eraser',
        'yobi_text_firstline',
        'yobi_text_language-circle',
        'yobi_text_language-square',
        'yobi_text_link',
        'yobi_text_link-2',
        'yobi_text_link-3',
        'yobi_text_link-4',
        'yobi_text_link-circle',
        'yobi_text_link-square',
        'yobi_text_maximize',
        'yobi_text_paperclip',
        'yobi_text_paperclip-2',
        'yobi_text_pharagraphspacing',
        'yobi_text_quote-down',
        'yobi_text_quote-down-circle',
        'yobi_text_quote-down-square',
        'yobi_text_quote-up',
        'yobi_text_quote-up-circle',
        'yobi_text_quote-up-square',
        'yobi_text_smallcaps',
        'yobi_text_text',
        'yobi_text_textalign-center',
        'yobi_text_textalign-justifycenter',
        'yobi_text_textalign-justifyleft',
        'yobi_text_textalign-justifyright',
        'yobi_text_textalign-left',
        'yobi_text_textalign-right',
        'yobi_text_text-block',
        'yobi_text_text-bold',
        'yobi_text_text-italic',
        'yobi_text_text-underline',
        'yobi_text_translate',
        'yobi_time_calendar',
        'yobi_time_calendar-2',
        'yobi_time_calendar-add',
        'yobi_time_calendar-circle',
        'yobi_time_calendar-edit',
        'yobi_time_calendar-remove',
        'yobi_time_calendar-search',
        'yobi_time_calendar-tick',
        'yobi_time_clock',
        'yobi_time_security-time',
        'yobi_time_time',
        'yobi_time_timer',
        'yobi_time_timer-pause',
        'yobi_time_timer-start',
        'yobi_user_people',
        'yobi_user_profile',
        'yobi_user_profile-2user',
        'yobi_user_profile-add',
        'yobi_user_profile-circle',
        'yobi_user_profile-delete',
        'yobi_user_profile-remove',
        'yobi_user_profile-tick',
        'yobi_user_tag-user',
        'yobi_user_user',
        'yobi_user_user-add',
        'yobi_user_user-cirlce-add',
        'yobi_user_user-edit',
        'yobi_user_user-minus',
        'yobi_user_user-octagon',
        'yobi_user_user-remove',
        'yobi_user_user-search',
        'yobi_user_user-square',
        'yobi_user_user-tag',
        'yobi_user_user-tick',
        'yobi_weather_cloud',
        'yobi_weather_cloud-cross',
        'yobi_weather_cloud-drizzle',
        'yobi_weather_cloud-fog',
        'yobi_weather_cloud-lightning',
        'yobi_weather_cloud-minus',
        'yobi_weather_cloud-notif',
        'yobi_weather_cloud-plus',
        'yobi_weather_cloud-snow',
        'yobi_weather_cloud-sunny',
        'yobi_weather_drop',
        'yobi_weather_flash',
        'yobi_weather_moon',
        'yobi_weather_sun',
        'yobi_weather_sun-2',
        'yobi_weather_sun-fog',
        'yobi_weather_wind',
        'yobi_weather_wind-2',
      ]
    >;
    featureVideo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    heroMedia: Schema.Attribute.Component<'shared.image-caption', false>;
    iconBox: Schema.Attribute.Component<'shared.icon-box', true>;
    imageCaption: Schema.Attribute.Component<'shared.image-caption', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::feature.feature'
    > &
      Schema.Attribute.Private;
    nextjs: Schema.Attribute.Component<'shared.nextjs-comp', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID;
    subfeatures: Schema.Attribute.Relation<
      'manyToMany',
      'api::subfeature.subfeature'
    >;
    tagline: Schema.Attribute.String;
    tags: Schema.Attribute.Relation<'manyToMany', 'api::tag.tag'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiIndustryIndustry extends Struct.CollectionTypeSchema {
  collectionName: 'industries';
  info: {
    description: '';
    displayName: 'Industry';
    pluralName: 'industries';
    singularName: 'industry';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    agents: Schema.Attribute.Relation<'oneToMany', 'api::ai-agent.ai-agent'>;
    caseStudies: Schema.Attribute.Relation<
      'manyToMany',
      'api::case-study.case-study'
    >;
    content: Schema.Attribute.RichText;
    content2: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    excerpt: Schema.Attribute.Text;
    faq: Schema.Attribute.Component<'shared.faq', true>;
    featuredIcon: Schema.Attribute.Enumeration<
      [
        'yobi_a_space',
        'yobi_archive_archive-add',
        'yobi_archive_archive-minus',
        'yobi_archive_archive-slash',
        'yobi_archive_archive-tick',
        'yobi_archive_book-saved',
        'yobi_archive_book-square',
        'yobi_archive_frame',
        'yobi_archive_receipt-square',
        'yobi_archive_save-2',
        'yobi_archive_save-add',
        'yobi_archive_save-minus',
        'yobi_archive_save-remove',
        'yobi_art_additem',
        'yobi_art_backward-item',
        'yobi_art_bezier',
        'yobi_art_blend',
        'yobi_art_blend-2',
        'yobi_art_blur',
        'yobi_art_brush',
        'yobi_art_brush-2',
        'yobi_art_brush-3',
        'yobi_art_brush-4',
        'yobi_art_bucket-circle',
        'yobi_art_bucket-square',
        'yobi_art_colorfilter',
        'yobi_art_colors-square',
        'yobi_art_color-swatch',
        'yobi_art_component',
        'yobi_art_copy',
        'yobi_art_copy-success',
        'yobi_art_designtools',
        'yobi_art_eraser',
        'yobi_art_flash-circle',
        'yobi_art_forward-item',
        'yobi_art_glass',
        'yobi_art_group',
        'yobi_art_group-2',
        'yobi_art_layer',
        'yobi_art_lifebuoy',
        'yobi_art_magicpen',
        'yobi_art_main-component',
        'yobi_art_mask',
        'yobi_art_mask-2',
        'yobi_art_mask-3',
        'yobi_art_omega-circle',
        'yobi_art_omega-square',
        'yobi_art_paintbucket',
        'yobi_art_path',
        'yobi_art_path-2',
        'yobi_art_path-square',
        'yobi_art_pen-add',
        'yobi_art_pen-close',
        'yobi_art_pen-remove',
        'yobi_art_pen-tool',
        'yobi_art_pen-tool-2',
        'yobi_art_recovery-convert',
        'yobi_art_rulerpen',
        'yobi_art_ruler',
        'yobi_art_scissor',
        'yobi_art_shapes',
        'yobi_art_shapes-2',
        'yobi_art_size',
        'yobi_biz_activity',
        'yobi_biz_chart',
        'yobi_biz_chart-2',
        'yobi_biz_chart-3',
        'yobi_biz_chart-4',
        'yobi_biz_chart-success',
        'yobi_biz_diagram',
        'yobi_biz_favorite-chart',
        'yobi_biz_frame',
        'yobi_biz_graph',
        'yobi_biz_hashtag',
        'yobi_biz_health',
        'yobi_biz_home-hashtag',
        'yobi_biz_home-trend-down',
        'yobi_biz_home-trend-up',
        'yobi_biz_personalcard',
        'yobi_biz_presention-chart',
        'yobi_biz_status-up',
        'yobi_biz_trend-down',
        'yobi_biz_trend-up',
        'yobi_building_bank',
        'yobi_building_building-2',
        'yobi_building_building-3',
        'yobi_building_building-4',
        'yobi_building_buildings',
        'yobi_building_buliding',
        'yobi_building_courthouse',
        'yobi_building_default',
        'yobi_building_hospital',
        'yobi_building_house',
        'yobi_building_house-2',
        'yobi_call',
        'yobi_call_add',
        'yobi_call_calling',
        'yobi_call_incoming',
        'yobi_call_minus',
        'yobi_call_outgoing',
        'yobi_call_received',
        'yobi_call_remove',
        'yobi_call_slash',
        'yobi_car_airplane',
        'yobi_car_airplane-square',
        'yobi_car_bus',
        'yobi_car_car',
        'yobi_car_driving',
        'yobi_car_gas-station',
        'yobi_car_ship',
        'yobi_car_smart-car',
        'yobi_chat_device-message',
        'yobi_chat_direct',
        'yobi_chat_directbox-default',
        'yobi_chat_directbox-notif',
        'yobi_chat_directbox-receive',
        'yobi_chat_directbox-send',
        'yobi_chat_direct-inbox',
        'yobi_chat_direct-normal',
        'yobi_chat_direct-notification',
        'yobi_chat_direct-send',
        'yobi_chat_message',
        'yobi_chat_message-2',
        'yobi_chat_message-add',
        'yobi_chat_message-add-2',
        'yobi_chat_message-circle',
        'yobi_chat_message-edit',
        'yobi_chat_message-favorite',
        'yobi_chat_message-minus',
        'yobi_chat_message-notif',
        'yobi_chat_message-remove',
        'yobi_chat_messages',
        'yobi_chat_messages-2',
        'yobi_chat_messages-3',
        'yobi_chat_messages-4',
        'yobi_chat_message-search',
        'yobi_chat_message-square',
        'yobi_chat_message-text',
        'yobi_chat_message-text-2',
        'yobi_chat_message-tick',
        'yobi_chat_message-time',
        'yobi_chat_sms',
        'yobi_chat_sms-edit',
        'yobi_chat_sms-notification',
        'yobi_chat_sms-search',
        'yobi_chat_sms-star',
        'yobi_chat_sms-tracking',
        'yobi_content_archive-book',
        'yobi_content_bill',
        'yobi_content_clipboard-close',
        'yobi_content_clipboard-export',
        'yobi_content_clipboard-import',
        'yobi_content_clipboard-text',
        'yobi_content_clipboard-tick',
        'yobi_content_copyright',
        'yobi_content_creative-commons',
        'yobi_content_document',
        'yobi_content_document-cloud',
        'yobi_content_document-copy',
        'yobi_content_document-download',
        'yobi_content_document-favorite',
        'yobi_content_document-filter',
        'yobi_content_document-forward',
        'yobi_content_document-like',
        'yobi_content_document-normal',
        'yobi_content_document-previous',
        'yobi_content_document-sketch',
        'yobi_content_document-text',
        'yobi_content_document-text-2',
        'yobi_content_document-upload',
        'yobi_content_edit',
        'yobi_content_edit-2',
        'yobi_content_menu-board',
        'yobi_content_note',
        'yobi_content_note-2',
        'yobi_content_note-add',
        'yobi_content_note-favorite',
        'yobi_content_note-remove',
        'yobi_content_note-text',
        'yobi_content_stickynote',
        'yobi_content_task',
        'yobi_content_task-square',
        'yobi_crypto_bitcoin-card',
        'yobi_crypto_bitcoin-convert',
        'yobi_crypto_bitcoin-refresh',
        'yobi_crypto_buy-crypto',
        'yobi_crypto_card-coin',
        'yobi_crypto_trade',
        'yobi_delivery_3d-cube-scan',
        'yobi_delivery_3d-rotate',
        'yobi_delivery_3d-square',
        'yobi_delivery_box',
        'yobi_delivery_box-2',
        'yobi_delivery_box-add',
        'yobi_delivery_box-remove',
        'yobi_delivery_box-search',
        'yobi_delivery_box-tick',
        'yobi_delivery_box-time',
        'yobi_delivery_convert-3d-cube',
        'yobi_delivery_group',
        'yobi_delivery_groups',
        'yobi_delivery_truck-remove',
        'yobi_delivery_truck-tick',
        'yobi_delivery_truck-time',
        'yobi_folder_2',
        'yobi_folder_add',
        'yobi_folder_cloud',
        'yobi_folder_cross',
        'yobi_folder_favorite',
        'yobi_folder_folder',
        'yobi_folder_minus',
        'yobi_folder_open',
        'yobi_grid_3square',
        'yobi_grid_align-bottom',
        'yobi_grid_align-horizontally',
        'yobi_grid_align-left',
        'yobi_grid_align-right',
        'yobi_grid_align-vertically',
        'yobi_grid_convertshape',
        'yobi_grid_convertshape-2',
        'yobi_grid_crop',
        'yobi_grid_element-1',
        'yobi_grid_element-2',
        'yobi_grid_element-3',
        'yobi_grid_element-4',
        'yobi_grid_element-equal',
        'yobi_grid_element-plus',
        'yobi_grid_fatrows',
        'yobi_grid_format-circle',
        'yobi_grid_format-square',
        'yobi_grid_frame',
        'yobi_grid_grid-1',
        'yobi_grid_grid-2',
        'yobi_grid_grid-3',
        'yobi_grid_grid-4',
        'yobi_grid_grid-5',
        'yobi_grid_grid-6',
        'yobi_grid_grid-7',
        'yobi_grid_grid-8',
        'yobi_grid_grid-9',
        'yobi_grid_grid-edit',
        'yobi_grid_grid-eraser',
        'yobi_grid_grid-lock',
        'yobi_grid_kanban',
        'yobi_grid_maximize',
        'yobi_grid_maximize-2',
        'yobi_grid_maximize-3',
        'yobi_grid_maximize-4',
        'yobi_grid_maximize-5',
        'yobi_grid_rotate-left',
        'yobi_grid_rotate-right',
        'yobi_grid_row-horizontal',
        'yobi_grid_row-vertical',
        'yobi_grid_slider-horizontal',
        'yobi_grid_slider-horizontal-2',
        'yobi_grid_slider-vertical',
        'yobi_grid_slider-vertical-2',
        'yobi_hardware_airdrop',
        'yobi_hardware_airpod',
        'yobi_hardware_airpods',
        'yobi_hardware_bluetooth',
        'yobi_hardware_bluetooth-2',
        'yobi_hardware_bluetooth-circle',
        'yobi_hardware_bluetooth-rectangle',
        'yobi_hardware_clock',
        'yobi_hardware_cloud-add',
        'yobi_hardware_cloud-change',
        'yobi_hardware_cloud-connection',
        'yobi_hardware_cloud-remove',
        'yobi_hardware_cpu',
        'yobi_hardware_cpu-charge',
        'yobi_hardware_cpu-setting',
        'yobi_hardware_devices',
        'yobi_hardware_driver',
        'yobi_hardware_driver-2',
        'yobi_hardware_driver-refresh',
        'yobi_hardware_electricity',
        'yobi_hardware_external-drive',
        'yobi_hardware_folder-connection',
        'yobi_hardware_game',
        'yobi_hardware_gameboy',
        'yobi_hardware_headphone',
        'yobi_hardware_headphones',
        'yobi_hardware_keyboard',
        'yobi_hardware_keyboard-open',
        'yobi_hardware_lamp',
        'yobi_hardware_microscope',
        'yobi_hardware_mirroring-screen',
        'yobi_hardware_monitor',
        'yobi_hardware_monitor-mobbile',
        'yobi_hardware_monitor-recorder',
        'yobi_hardware_mouse',
        'yobi_hardware_music-play',
        'yobi_hardware_printer',
        'yobi_hardware_printer-slash',
        'yobi_hardware_ram',
        'yobi_hardware_ram-2',
        'yobi_hardware_simcard',
        'yobi_hardware_simcard-2',
        'yobi_hardware_simcard-3',
        'yobi_hardware_speaker',
        'yobi_hardware_watch',
        'yobi_hardware_watch-status',
        'yobi_hardware_weight',
        'yobi_hardware-mobile',
        'yobi_huh_aquarius',
        'yobi_huh_gemini',
        'yobi_huh_gemini-2',
        'yobi_huh_man',
        'yobi_huh_sagittarius',
        'yobi_huh_woman',
        'yobi_learn_award',
        'yobi_learn_book',
        'yobi_learn_book-2',
        'yobi_learn_bookmark',
        'yobi_learn_bookmark-2',
        'yobi_learn_briefcase',
        'yobi_learn_brifecase-cross',
        'yobi_learn_brifecase-tick',
        'yobi_learn_brifecase-timer',
        'yobi_learn_calculator',
        'yobi_learn_clipboard',
        'yobi_learn_gift',
        'yobi_learn_note',
        'yobi_learn_note-2',
        'yobi_learn_teacher',
        'yobi_logo_aave-aave',
        'yobi_logo_android',
        'yobi_logo_ankr-ankr',
        'yobi_logo_apple',
        'yobi_logo_augur-rep',
        'yobi_logo_autonio-niox',
        'yobi_logo_avalanche-avax',
        'yobi_logo_be',
        'yobi_logo_binance-coin-bnb',
        'yobi_logo_binance-usd-busd',
        'yobi_logo_bitcoin-btc',
        'yobi_logo_blogger',
        'yobi_logo_bootsrap',
        'yobi_logo_cardano-ada',
        'yobi_logo_celo-celo',
        'yobi_logo_celsius-cel',
        'yobi_logo_chainlink-link',
        'yobi_logo_civic-cvc',
        'yobi_logo_dai-dai',
        'yobi_logo_dash-dash',
        'yobi_logo_decred-dcr',
        'yobi_logo_dent-dent',
        'yobi_logo_dropbox',
        'yobi_logo_educare-ekt',
        'yobi_logo_emercoin-emc',
        'yobi_logo_enjin-coin-enj',
        'yobi_logo_eos-eos',
        'yobi_logo_ethereum-eth',
        'yobi_logo_ethereum-classic-etc',
        'yobi_logo_facebook',
        'yobi_logo_figma',
        'yobi_logo_figma-2',
        'yobi_logo_frame',
        'yobi_logo_frame-2',
        'yobi_logo_framer',
        'yobi_logo_ftx-token-ftt',
        'yobi_logo_google',
        'yobi_logo_google-2',
        'yobi_logo_google-play',
        'yobi_logo_harmony-one',
        'yobi_logo_hedera-hashgraph-hbar',
        'yobi_logo_hex-hex',
        'yobi_logo_html-3',
        'yobi_logo_html-5',
        'yobi_logo_huobi-token-ht',
        'yobi_logo_icon-icx',
        'yobi_logo_illustrator',
        'yobi_logo_iost-iost',
        'yobi_logo_java-script',
        'yobi_logo_js',
        'yobi_logo_kyber-network-knc',
        'yobi_logo_litecoinltc',
        'yobi_logo_maker-mkr',
        'yobi_logo_messenger',
        'yobi_logo_monero-xmr',
        'yobi_logo_nebulas-nas',
        'yobi_logo_nem-xem',
        'yobi_logo_ocean-protocol-ocean',
        'yobi_logo_okb-okb',
        'yobi_logo_ontology-ont',
        'yobi_logo_paypal',
        'yobi_logo_photoshop',
        'yobi_logo_polkadot-dot',
        'yobi_logo_polygon-matic',
        'yobi_logo_python',
        'yobi_logo_quant-qnt',
        'yobi_logo_siacoin-sc',
        'yobi_logo_slack',
        'yobi_logo_snapchat',
        'yobi_logo_solana-sol',
        'yobi_logo_spotify',
        'yobi_logo_stacks-stx',
        'yobi_logo_stellar-xlm',
        'yobi_logo_tenx-pay',
        'yobi_logo_tether-usdt',
        'yobi_logo_the-graph-grt',
        'yobi_logo_theta-theta',
        'yobi_logo_thorchain-rune',
        'yobi_logo_trello',
        'yobi_logo_triangle',
        'yobi_logo_trontron-trx',
        'yobi_logo_twitch',
        'yobi_logo_usd-coin-usdc',
        'yobi_logo_velas-vlx',
        'yobi_logo_vibe-vibe',
        'yobi_logo_wanchain-wan',
        'yobi_logo_wanchain-wan-2',
        'yobi_logo_whatsapp',
        'yobi_logo_windows',
        'yobi_logo_wing-wing',
        'yobi_logo_xd',
        'yobi_logo_xiaomi',
        'yobi_logo_xrp-xrp',
        'yobi_logo_youtube',
        'yobi_logo_zel-zel',
        'yobi_logo_zoom',
        'yobi_map_arrow',
        'yobi_map_arrow-square',
        'yobi_map_direct-down',
        'yobi_map_direct-left',
        'yobi_map_direct-right',
        'yobi_map_direct-up',
        'yobi_map_discover',
        'yobi_map_global',
        'yobi_map_global-edit',
        'yobi_map_global-refresh',
        'yobi_map_global-search',
        'yobi_map_gps',
        'yobi_map_gps-slash',
        'yobi_map_location',
        'yobi_map_location-add',
        'yobi_map_location-cross',
        'yobi_map_location-minus',
        'yobi_map_location-slash',
        'yobi_map_location-tick',
        'yobi_map_map',
        'yobi_map_map-2',
        'yobi_map_picture-frame',
        'yobi_map_radar',
        'yobi_map_radar-2',
        'yobi_map_route-square',
        'yobi_map_routing',
        'yobi_map_routing-2',
        'yobi_media_audio-square',
        'yobi_media_backward',
        'yobi_media_backward-5-seconds',
        'yobi_media_backward-10-seconds',
        'yobi_media_backward-15-seconds',
        'yobi_media_camera',
        'yobi_media_camera-slash',
        'yobi_media_devices',
        'yobi_media_forward',
        'yobi_media_forward-5-seconds',
        'yobi_media_forward-10-seconds',
        'yobi_media_forward-15-seconds',
        'yobi_media_gallery',
        'yobi_media_gallery-add',
        'yobi_media_gallery-edit',
        'yobi_media_gallery-export',
        'yobi_media_gallery-favorite',
        'yobi_media_gallery-import',
        'yobi_media_gallery-remove',
        'yobi_media_gallery-slash',
        'yobi_media_gallery-tick',
        'yobi_media_group',
        'yobi_media_image',
        'yobi_media_maximize-circle',
        'yobi_media_microphone',
        'yobi_media_microphone-2',
        'yobi_media_microphone-slash',
        'yobi_media_microphone-slash-2',
        'yobi_media_mini-music-sqaure',
        'yobi_media_music',
        'yobi_media_music-circle',
        'yobi_media_music-dashboard',
        'yobi_media_music-filter',
        'yobi_media_music-library-2',
        'yobi_media_musicnote',
        'yobi_media_music-playlist',
        'yobi_media_music-square',
        'yobi_media_music-square-add',
        'yobi_media_music-square-remove',
        'yobi_media_music-square-search',
        'yobi_media_next',
        'yobi_media_note-square',
        'yobi_media_pause',
        'yobi_media_pause-circle',
        'yobi_media_play',
        'yobi_media_play-add',
        'yobi_media_play-circle',
        'yobi_media_play-cricle',
        'yobi_media_play-remove',
        'yobi_media_previous',
        'yobi_media_radio',
        'yobi_media_record',
        'yobi_media_record-circle',
        'yobi_media_repeate-music',
        'yobi_media_repeate-one',
        'yobi_media_scissor',
        'yobi_media_screenmirroring',
        'yobi_media_stop',
        'yobi_media_stop-circle',
        'yobi_media_subtitle',
        'yobi_media_video',
        'yobi_media_video-add',
        'yobi_media_video-circle',
        'yobi_media_video-horizontal',
        'yobi_media_video-octagon',
        'yobi_media_video-play',
        'yobi_media_video-remove',
        'yobi_media_video-slash',
        'yobi_media_video-square',
        'yobi_media_video-tick',
        'yobi_media_video-time',
        'yobi_media_video-vertical',
        'yobi_media_voice-cricle',
        'yobi_media_voice-square',
        'yobi_media_volume-cross',
        'yobi_media_volume-high',
        'yobi_media_volume-low',
        'yobi_media_volume-low-2',
        'yobi_media_volume-mute',
        'yobi_media_volume-slash',
        'yobi_media_volume-up',
        'yobi_misc_3dcube',
        'yobi_misc_add',
        'yobi_misc_add-circle',
        'yobi_misc_add-square',
        'yobi_misc_archive',
        'yobi_misc_autobrightness',
        'yobi_misc_battery-2full',
        'yobi_misc_battery-charging',
        'yobi_misc_battery-disable',
        'yobi_misc_battery-empty',
        'yobi_misc_battery-empty-2',
        'yobi_misc_battery-full',
        'yobi_misc_box-2',
        'yobi_misc_broom',
        'yobi_misc_bubble',
        'yobi_misc_cake',
        'yobi_misc_cd',
        'yobi_misc_chart',
        'yobi_misc_chrome',
        'yobi_misc_close-circle',
        'yobi_misc_close-square',
        'yobi_misc_coffee',
        'yobi_misc_computing',
        'yobi_misc_crown',
        'yobi_misc_crown-2',
        'yobi_misc_cup',
        'yobi_misc_danger',
        'yobi_misc_diamonds',
        'yobi_misc_discover',
        'yobi_misc_emoji-happy',
        'yobi_misc_emoji-normal',
        'yobi_misc_emoji-sad',
        'yobi_misc_filter',
        'yobi_misc_filter-add',
        'yobi_misc_filter-edit',
        'yobi_misc_filter-remove',
        'yobi_misc_filter-search',
        'yobi_misc_filter-square',
        'yobi_misc_filter-tick',
        'yobi_misc_flag',
        'yobi_misc_flag-2',
        'yobi_misc_flash',
        'yobi_misc_flash-circle',
        'yobi_misc_flash-slash',
        'yobi_misc_ghost',
        'yobi_misc_glass',
        'yobi_misc_grammerly',
        'yobi_misc_happyemoji',
        'yobi_misc_home',
        'yobi_misc_home-2',
        'yobi_misc_home-3',
        'yobi_misc_home-wifi',
        'yobi_misc_info-circle',
        'yobi_misc_information',
        'yobi_misc_instagram',
        'yobi_misc_judge',
        'yobi_misc_lamp',
        'yobi_misc_level',
        'yobi_misc_menu',
        'yobi_misc_milk',
        'yobi_misc_minus',
        'yobi_misc_minus-cirlce',
        'yobi_misc_minus-square',
        'yobi_misc_mirror',
        'yobi_misc_more-circle',
        'yobi_misc_more-square',
        'yobi_misc_mouse',
        'yobi_misc_mouse-circle',
        'yobi_misc_mouse-square',
        'yobi_misc_no',
        'yobi_misc_no-2',
        'yobi_misc_pet',
        'yobi_misc_ranking',
        'yobi_misc_reserve',
        'yobi_misc_safe-home',
        'yobi_misc_send',
        'yobi_misc_send-2',
        'yobi_misc_share',
        'yobi_misc_signpost',
        'yobi_misc_slash',
        'yobi_misc_slider',
        'yobi_misc_smart-home',
        'yobi_misc_sort',
        'yobi_misc_sound',
        'yobi_misc_speedometer',
        'yobi_misc_status',
        'yobi_misc_sticker',
        'yobi_misc_story',
        'yobi_misc_tag-cross',
        'yobi_misc_tag-right',
        'yobi_misc_tick-circle',
        'yobi_misc_tick-square',
        'yobi_misc_trash',
        'yobi_misc_tree',
        'yobi_misc_triangle',
        'yobi_misc_trush-square',
        'yobi_misc_verify',
        'yobi_misc_warning-2',
        'yobi_misc_weight',
        'yobi_misc_wifi',
        'yobi_misc_wifi-square',
        'yobi_money_archive',
        'yobi_money_card',
        'yobi_money_card-add',
        'yobi_money_card-edit',
        'yobi_money_card-pos',
        'yobi_money_card-receive',
        'yobi_money_card-remove',
        'yobi_money_card-remove-2',
        'yobi_money_cards',
        'yobi_money_card-send',
        'yobi_money_card-slash',
        'yobi_money_card-tick',
        'yobi_money_card-tick-2',
        'yobi_money_chart-square',
        'yobi_money_coin',
        'yobi_money_coin-2',
        'yobi_money_discount-circle',
        'yobi_money_discount-shape',
        'yobi_money_document',
        'yobi_money_dollar-circle',
        'yobi_money_dollar-square',
        'yobi_money_empty-wallet',
        'yobi_money_empty-wallet-add',
        'yobi_money_empty-wallet-change',
        'yobi_money_empty-wallet-remove',
        'yobi_money_empty-wallet-tick',
        'yobi_money_empty-wallet-time',
        'yobi_money_group',
        'yobi_money_group-2',
        'yobi_money_math',
        'yobi_money_money',
        'yobi_money_money-2',
        'yobi_money_money-3',
        'yobi_money_money-4',
        'yobi_money_money-add',
        'yobi_money_money-change',
        'yobi_money_money-forbidden',
        'yobi_money_money-recive',
        'yobi_money_money-remove',
        'yobi_money_moneys',
        'yobi_money_money-send',
        'yobi_money_money-tick',
        'yobi_money_money-time',
        'yobi_money_percentage-square',
        'yobi_money_receipt',
        'yobi_money_receipt-2',
        'yobi_money_receipt-3',
        'yobi_money_receipt-4',
        'yobi_money_receipt-add',
        'yobi_money_receipt-discount',
        'yobi_money_receipt-disscount',
        'yobi_money_receipt-edit',
        'yobi_money_receipt-item',
        'yobi_money_receipt-minus',
        'yobi_money_receipt-search',
        'yobi_money_receipt-text',
        'yobi_money_security-card',
        'yobi_money_strongbox',
        'yobi_money_strongbox-2',
        'yobi_money_tag',
        'yobi_money_tag-2',
        'yobi_money_ticket',
        'yobi_money_ticket-2',
        'yobi_money_ticket-discount',
        'yobi_money_ticket-expired',
        'yobi_money_ticket-star',
        'yobi_money_transaction-minus',
        'yobi_money_wallet',
        'yobi_money_wallet-2',
        'yobi_money_wallet-3',
        'yobi_money_wallet-4',
        'yobi_money_wallet-add',
        'yobi_money_wallet-add-2',
        'yobi_money_wallet-check',
        'yobi_money_wallet-minus',
        'yobi_money_wallet-money',
        'yobi_money_wallet-remove',
        'yobi_money_wallet-search',
        'yobi_move_arrange-circle',
        'yobi_move_arrange-circle-2',
        'yobi_move_arrange-square',
        'yobi_move_arrange-square-2',
        'yobi_move_arrow-2',
        'yobi_move_arrow-3',
        'yobi_move_arrow-circle-down',
        'yobi_move_arrow-circle-left',
        'yobi_move_arrow-circle-right',
        'yobi_move_arrow-down',
        'yobi_move_arrow-down-2',
        'yobi_move_arrow-down-3',
        'yobi_move_arrow-down-4',
        'yobi_move_arrow-left',
        'yobi_move_arrow-left-2',
        'yobi_move_arrow-left-3',
        'yobi_move_arrow-left-4',
        'yobi_move_arrow-right',
        'yobi_move_arrow-right-2',
        'yobi_move_arrow-right-3',
        'yobi_move_arrow-right-4',
        'yobi_move_arrow-square-down',
        'yobi_move_arrow-square-left',
        'yobi_move_arrow-square-right',
        'yobi_move_arrow-square-up',
        'yobi_move_arrow-swap-horizontal',
        'yobi_move_arrow-up',
        'yobi_move_arrow-up-2',
        'yobi_move_arrow-up-3',
        'yobi_move_arrow-up-4',
        'yobi_move_back-square',
        'yobi_move_convert',
        'yobi_move_export',
        'yobi_move_export-2',
        'yobi_move_export-3',
        'yobi_move_export-4',
        'yobi_move_forward-square',
        'yobi_move_frame',
        'yobi_move_frame-2',
        'yobi_move_frame-3',
        'yobi_move_import',
        'yobi_move_import-2',
        'yobi_move_import-3',
        'yobi_move_login',
        'yobi_move_login-2',
        'yobi_move_logout',
        'yobi_move_logout-2',
        'yobi_move_received',
        'yobi_move_receive-square',
        'yobi_move_receive-square-2',
        'yobi_move_redo',
        'yobi_move_refresh',
        'yobi_move_refresh-2',
        'yobi_move_refresh-circle',
        'yobi_move_refresh-left-square',
        'yobi_move_refresh-right-square',
        'yobi_move_refresh-square-2',
        'yobi_move_repeat',
        'yobi_move_repeat-circle',
        'yobi_move_rotate-left',
        'yobi_move_rotate-right',
        'yobi_move_send',
        'yobi_move_send-sqaure-2',
        'yobi_move_send-square',
        'yobi_move_undo',
        'yobi_notification_bell',
        'yobi_notification_bell-bing',
        'yobi_notification_lamp-charge',
        'yobi_notification_lamp-on',
        'yobi_notification_lamp-slash',
        'yobi_notification_notification',
        'yobi_notification_notification-circle',
        'yobi_notification_notification-favorite',
        'yobi_notification_notification-status',
        'yobi_programing_code',
        'yobi_programing_code-2',
        'yobi_programing_code-circle',
        'yobi_programing_command',
        'yobi_programing_command-square',
        'yobi_programing_data',
        'yobi_programing_data-2',
        'yobi_programing_document-code',
        'yobi_programing_document-code-2',
        'yobi_programing_hashtag',
        'yobi_programing_hashtag-down',
        'yobi_programing_hashtag-up',
        'yobi_programing_hierarchy',
        'yobi_programing_hierarchy-2',
        'yobi_programing_hierarchy-3',
        'yobi_programing_hierarchy-square',
        'yobi_programing_hierarchy-square-2',
        'yobi_programing_hierarchy-square-3',
        'yobi_programing_message-programming',
        'yobi_programing_mobile-programming',
        'yobi_programing_programming-arrow',
        'yobi_programing_programming-arrows',
        'yobi_programing_scroll',
        'yobi_programing_sidebar-bottom',
        'yobi_programing_sidebar-left',
        'yobi_programing_sidebar-right',
        'yobi_programing_sidebar-top',
        'yobi_search_favorite',
        'yobi_search_favorite-2',
        'yobi_search_normal',
        'yobi_search_normal-2',
        'yobi_search_status',
        'yobi_search_status-2',
        'yobi_search_zoom-in',
        'yobi_search_zoom-in-2',
        'yobi_search_zoom-out',
        'yobi_search_zoom-out-2',
        'yobi_security_alarm',
        'yobi_security_check',
        'yobi_security_eye',
        'yobi_security_eye-slash',
        'yobi_security_finger-cricle',
        'yobi_security_finger-scan',
        'yobi_security_key',
        'yobi_security_key-square',
        'yobi_security_lock',
        'yobi_security_lock-2',
        'yobi_security_lock-circle',
        'yobi_security_lock-slash',
        'yobi_security_password-check',
        'yobi_security_radar',
        'yobi_security_scan',
        'yobi_security_scan-barcode',
        'yobi_security_scanner',
        'yobi_security_scanning',
        'yobi_security_security',
        'yobi_security_security-safe',
        'yobi_security_security-user',
        'yobi_security_shield',
        'yobi_security_shield-cross',
        'yobi_security_shield-search',
        'yobi_security_shield-security',
        'yobi_security_shield-slash',
        'yobi_security_shield-tick',
        'yobi_security_unlock',
        'yobi_settings_candle',
        'yobi_settings_candle-2',
        'yobi_settings_category',
        'yobi_settings_category-2',
        'yobi_settings_menu',
        'yobi_settings_more',
        'yobi_settings_more-2',
        'yobi_settings_setting',
        'yobi_settings_setting-2',
        'yobi_settings_setting-3',
        'yobi_settings_setting-4',
        'yobi_settings_setting-5',
        'yobi_settings_settings',
        'yobi_settings_toggle-off',
        'yobi_settings_toggle-off-circle',
        'yobi_settings_toggle-on',
        'yobi_settings_toggle-on-circle',
        'yobi_shop_bag',
        'yobi_shop_bag-2',
        'yobi_shop_bag-cross',
        'yobi_shop_bag-cross-2',
        'yobi_shop_bag-happy',
        'yobi_shop_bag-tick',
        'yobi_shop_bag-tick-2',
        'yobi_shop_bag-timer',
        'yobi_shop_barcode',
        'yobi_shop_shop',
        'yobi_shop_shop-add',
        'yobi_shop_shopping-bag',
        'yobi_shop_shopping-cart',
        'yobi_shop_shop-remove',
        'yobi_social_24-support',
        'yobi_social_dislike',
        'yobi_social_heart',
        'yobi_social_heart-add',
        'yobi_social_heart-circle',
        'yobi_social_heart-edit',
        'yobi_social_heart-remove',
        'yobi_social_heart-search',
        'yobi_social_heart-slash',
        'yobi_social_heart-tick',
        'yobi_social_like',
        'yobi_social_like-dislike',
        'yobi_social_likes',
        'yobi_social_like-shapes',
        'yobi_social_like-tag',
        'yobi_social_lovely',
        'yobi_social_magic-star',
        'yobi_social_medal',
        'yobi_social_medal-star',
        'yobi_social_message-question',
        'yobi_social_ranking',
        'yobi_social_smileys',
        'yobi_social_star',
        'yobi_social_stars',
        'yobi_social_star-slash',
        'yobi_social_unlimited',
        'yobi_text_attach-circle',
        'yobi_text_attach-square',
        'yobi_text_eraser',
        'yobi_text_firstline',
        'yobi_text_language-circle',
        'yobi_text_language-square',
        'yobi_text_link',
        'yobi_text_link-2',
        'yobi_text_link-3',
        'yobi_text_link-4',
        'yobi_text_link-circle',
        'yobi_text_link-square',
        'yobi_text_maximize',
        'yobi_text_paperclip',
        'yobi_text_paperclip-2',
        'yobi_text_pharagraphspacing',
        'yobi_text_quote-down',
        'yobi_text_quote-down-circle',
        'yobi_text_quote-down-square',
        'yobi_text_quote-up',
        'yobi_text_quote-up-circle',
        'yobi_text_quote-up-square',
        'yobi_text_smallcaps',
        'yobi_text_text',
        'yobi_text_textalign-center',
        'yobi_text_textalign-justifycenter',
        'yobi_text_textalign-justifyleft',
        'yobi_text_textalign-justifyright',
        'yobi_text_textalign-left',
        'yobi_text_textalign-right',
        'yobi_text_text-block',
        'yobi_text_text-bold',
        'yobi_text_text-italic',
        'yobi_text_text-underline',
        'yobi_text_translate',
        'yobi_time_calendar',
        'yobi_time_calendar-2',
        'yobi_time_calendar-add',
        'yobi_time_calendar-circle',
        'yobi_time_calendar-edit',
        'yobi_time_calendar-remove',
        'yobi_time_calendar-search',
        'yobi_time_calendar-tick',
        'yobi_time_clock',
        'yobi_time_security-time',
        'yobi_time_time',
        'yobi_time_timer',
        'yobi_time_timer-pause',
        'yobi_time_timer-start',
        'yobi_user_people',
        'yobi_user_profile',
        'yobi_user_profile-2user',
        'yobi_user_profile-add',
        'yobi_user_profile-circle',
        'yobi_user_profile-delete',
        'yobi_user_profile-remove',
        'yobi_user_profile-tick',
        'yobi_user_tag-user',
        'yobi_user_user',
        'yobi_user_user-add',
        'yobi_user_user-cirlce-add',
        'yobi_user_user-edit',
        'yobi_user_user-minus',
        'yobi_user_user-octagon',
        'yobi_user_user-remove',
        'yobi_user_user-search',
        'yobi_user_user-square',
        'yobi_user_user-tag',
        'yobi_user_user-tick',
        'yobi_weather_cloud',
        'yobi_weather_cloud-cross',
        'yobi_weather_cloud-drizzle',
        'yobi_weather_cloud-fog',
        'yobi_weather_cloud-lightning',
        'yobi_weather_cloud-minus',
        'yobi_weather_cloud-notif',
        'yobi_weather_cloud-plus',
        'yobi_weather_cloud-snow',
        'yobi_weather_cloud-sunny',
        'yobi_weather_drop',
        'yobi_weather_flash',
        'yobi_weather_moon',
        'yobi_weather_sun',
        'yobi_weather_sun-2',
        'yobi_weather_sun-fog',
        'yobi_weather_wind',
        'yobi_weather_wind-2',
      ]
    >;
    heroMedia: Schema.Attribute.Component<'shared.image-caption', false>;
    iconBox: Schema.Attribute.Component<'shared.icon-box', true>;
    imageCaption: Schema.Attribute.Component<'shared.image-caption', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::industry.industry'
    > &
      Schema.Attribute.Private;
    nextJS: Schema.Attribute.Component<'shared.nextjs-comp', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', true>;
    slug: Schema.Attribute.UID<'title'>;
    testimonials: Schema.Attribute.Relation<
      'manyToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    use_cases: Schema.Attribute.Relation<
      'manyToMany',
      'api::use-case.use-case'
    >;
  };
}

export interface ApiIntegrationIntegration extends Struct.CollectionTypeSchema {
  collectionName: 'integrations';
  info: {
    description: '';
    displayName: 'Integration';
    pluralName: 'integrations';
    singularName: 'integration';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ai_agents: Schema.Attribute.Relation<
      'manyToMany',
      'api::ai-agent.ai-agent'
    >;
    articles: Schema.Attribute.Relation<'manyToMany', 'api::article.article'>;
    caseStudy: Schema.Attribute.Relation<
      'manyToMany',
      'api::case-study.case-study'
    >;
    content: Schema.Attribute.RichText;
    content2: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq: Schema.Attribute.Component<'shared.faq', true>;
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imageCaption: Schema.Attribute.Component<'shared.image-caption', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::integration.integration'
    > &
      Schema.Attribute.Private;
    nextjs: Schema.Attribute.Component<'shared.nextjs-comp', false>;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ApiPressPress extends Struct.CollectionTypeSchema {
  collectionName: 'presses';
  info: {
    description: '';
    displayName: 'Press';
    pluralName: 'presses';
    singularName: 'press';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articleURL: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featured: Schema.Attribute.Boolean;
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::press.press'> &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pressContent: Schema.Attribute.Text;
    pressID: Schema.Attribute.UID;
    pubDate: Schema.Attribute.Date;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSubfeatureSubfeature extends Struct.CollectionTypeSchema {
  collectionName: 'subfeatures';
  info: {
    description: '';
    displayName: 'Features';
    pluralName: 'subfeatures';
    singularName: 'subfeature';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.RichText;
    excerpt: Schema.Attribute.Text;
    featuredIcon: Schema.Attribute.Enumeration<
      [
        'yobi_a_space',
        'yobi_archive_archive-add',
        'yobi_archive_archive-minus',
        'yobi_archive_archive-slash',
        'yobi_archive_archive-tick',
        'yobi_archive_book-saved',
        'yobi_archive_book-square',
        'yobi_archive_frame',
        'yobi_archive_receipt-square',
        'yobi_archive_save-2',
        'yobi_archive_save-add',
        'yobi_archive_save-minus',
        'yobi_archive_save-remove',
        'yobi_art_additem',
        'yobi_art_backward-item',
        'yobi_art_bezier',
        'yobi_art_blend',
        'yobi_art_blend-2',
        'yobi_art_blur',
        'yobi_art_brush',
        'yobi_art_brush-2',
        'yobi_art_brush-3',
        'yobi_art_brush-4',
        'yobi_art_bucket-circle',
        'yobi_art_bucket-square',
        'yobi_art_colorfilter',
        'yobi_art_colors-square',
        'yobi_art_color-swatch',
        'yobi_art_component',
        'yobi_art_copy',
        'yobi_art_copy-success',
        'yobi_art_designtools',
        'yobi_art_eraser',
        'yobi_art_flash-circle',
        'yobi_art_forward-item',
        'yobi_art_glass',
        'yobi_art_group',
        'yobi_art_group-2',
        'yobi_art_layer',
        'yobi_art_lifebuoy',
        'yobi_art_magicpen',
        'yobi_art_main-component',
        'yobi_art_mask',
        'yobi_art_mask-2',
        'yobi_art_mask-3',
        'yobi_art_omega-circle',
        'yobi_art_omega-square',
        'yobi_art_paintbucket',
        'yobi_art_path',
        'yobi_art_path-2',
        'yobi_art_path-square',
        'yobi_art_pen-add',
        'yobi_art_pen-close',
        'yobi_art_pen-remove',
        'yobi_art_pen-tool',
        'yobi_art_pen-tool-2',
        'yobi_art_recovery-convert',
        'yobi_art_rulerpen',
        'yobi_art_ruler',
        'yobi_art_scissor',
        'yobi_art_shapes',
        'yobi_art_shapes-2',
        'yobi_art_size',
        'yobi_biz_activity',
        'yobi_biz_chart',
        'yobi_biz_chart-2',
        'yobi_biz_chart-3',
        'yobi_biz_chart-4',
        'yobi_biz_chart-success',
        'yobi_biz_diagram',
        'yobi_biz_favorite-chart',
        'yobi_biz_frame',
        'yobi_biz_graph',
        'yobi_biz_hashtag',
        'yobi_biz_health',
        'yobi_biz_home-hashtag',
        'yobi_biz_home-trend-down',
        'yobi_biz_home-trend-up',
        'yobi_biz_personalcard',
        'yobi_biz_presention-chart',
        'yobi_biz_status-up',
        'yobi_biz_trend-down',
        'yobi_biz_trend-up',
        'yobi_building_bank',
        'yobi_building_building-2',
        'yobi_building_building-3',
        'yobi_building_building-4',
        'yobi_building_buildings',
        'yobi_building_buliding',
        'yobi_building_courthouse',
        'yobi_building_default',
        'yobi_building_hospital',
        'yobi_building_house',
        'yobi_building_house-2',
        'yobi_call',
        'yobi_call_add',
        'yobi_call_calling',
        'yobi_call_incoming',
        'yobi_call_minus',
        'yobi_call_outgoing',
        'yobi_call_received',
        'yobi_call_remove',
        'yobi_call_slash',
        'yobi_car_airplane',
        'yobi_car_airplane-square',
        'yobi_car_bus',
        'yobi_car_car',
        'yobi_car_driving',
        'yobi_car_gas-station',
        'yobi_car_ship',
        'yobi_car_smart-car',
        'yobi_chat_device-message',
        'yobi_chat_direct',
        'yobi_chat_directbox-default',
        'yobi_chat_directbox-notif',
        'yobi_chat_directbox-receive',
        'yobi_chat_directbox-send',
        'yobi_chat_direct-inbox',
        'yobi_chat_direct-normal',
        'yobi_chat_direct-notification',
        'yobi_chat_direct-send',
        'yobi_chat_message',
        'yobi_chat_message-2',
        'yobi_chat_message-add',
        'yobi_chat_message-add-2',
        'yobi_chat_message-circle',
        'yobi_chat_message-edit',
        'yobi_chat_message-favorite',
        'yobi_chat_message-minus',
        'yobi_chat_message-notif',
        'yobi_chat_message-remove',
        'yobi_chat_messages',
        'yobi_chat_messages-2',
        'yobi_chat_messages-3',
        'yobi_chat_messages-4',
        'yobi_chat_message-search',
        'yobi_chat_message-square',
        'yobi_chat_message-text',
        'yobi_chat_message-text-2',
        'yobi_chat_message-tick',
        'yobi_chat_message-time',
        'yobi_chat_sms',
        'yobi_chat_sms-edit',
        'yobi_chat_sms-notification',
        'yobi_chat_sms-search',
        'yobi_chat_sms-star',
        'yobi_chat_sms-tracking',
        'yobi_content_archive-book',
        'yobi_content_bill',
        'yobi_content_clipboard-close',
        'yobi_content_clipboard-export',
        'yobi_content_clipboard-import',
        'yobi_content_clipboard-text',
        'yobi_content_clipboard-tick',
        'yobi_content_copyright',
        'yobi_content_creative-commons',
        'yobi_content_document',
        'yobi_content_document-cloud',
        'yobi_content_document-copy',
        'yobi_content_document-download',
        'yobi_content_document-favorite',
        'yobi_content_document-filter',
        'yobi_content_document-forward',
        'yobi_content_document-like',
        'yobi_content_document-normal',
        'yobi_content_document-previous',
        'yobi_content_document-sketch',
        'yobi_content_document-text',
        'yobi_content_document-text-2',
        'yobi_content_document-upload',
        'yobi_content_edit',
        'yobi_content_edit-2',
        'yobi_content_menu-board',
        'yobi_content_note',
        'yobi_content_note-2',
        'yobi_content_note-add',
        'yobi_content_note-favorite',
        'yobi_content_note-remove',
        'yobi_content_note-text',
        'yobi_content_stickynote',
        'yobi_content_task',
        'yobi_content_task-square',
        'yobi_crypto_bitcoin-card',
        'yobi_crypto_bitcoin-convert',
        'yobi_crypto_bitcoin-refresh',
        'yobi_crypto_buy-crypto',
        'yobi_crypto_card-coin',
        'yobi_crypto_trade',
        'yobi_delivery_3d-cube-scan',
        'yobi_delivery_3d-rotate',
        'yobi_delivery_3d-square',
        'yobi_delivery_box',
        'yobi_delivery_box-2',
        'yobi_delivery_box-add',
        'yobi_delivery_box-remove',
        'yobi_delivery_box-search',
        'yobi_delivery_box-tick',
        'yobi_delivery_box-time',
        'yobi_delivery_convert-3d-cube',
        'yobi_delivery_group',
        'yobi_delivery_groups',
        'yobi_delivery_truck-remove',
        'yobi_delivery_truck-tick',
        'yobi_delivery_truck-time',
        'yobi_folder_2',
        'yobi_folder_add',
        'yobi_folder_cloud',
        'yobi_folder_cross',
        'yobi_folder_favorite',
        'yobi_folder_folder',
        'yobi_folder_minus',
        'yobi_folder_open',
        'yobi_grid_3square',
        'yobi_grid_align-bottom',
        'yobi_grid_align-horizontally',
        'yobi_grid_align-left',
        'yobi_grid_align-right',
        'yobi_grid_align-vertically',
        'yobi_grid_convertshape',
        'yobi_grid_convertshape-2',
        'yobi_grid_crop',
        'yobi_grid_element-1',
        'yobi_grid_element-2',
        'yobi_grid_element-3',
        'yobi_grid_element-4',
        'yobi_grid_element-equal',
        'yobi_grid_element-plus',
        'yobi_grid_fatrows',
        'yobi_grid_format-circle',
        'yobi_grid_format-square',
        'yobi_grid_frame',
        'yobi_grid_grid-1',
        'yobi_grid_grid-2',
        'yobi_grid_grid-3',
        'yobi_grid_grid-4',
        'yobi_grid_grid-5',
        'yobi_grid_grid-6',
        'yobi_grid_grid-7',
        'yobi_grid_grid-8',
        'yobi_grid_grid-9',
        'yobi_grid_grid-edit',
        'yobi_grid_grid-eraser',
        'yobi_grid_grid-lock',
        'yobi_grid_kanban',
        'yobi_grid_maximize',
        'yobi_grid_maximize-2',
        'yobi_grid_maximize-3',
        'yobi_grid_maximize-4',
        'yobi_grid_maximize-5',
        'yobi_grid_rotate-left',
        'yobi_grid_rotate-right',
        'yobi_grid_row-horizontal',
        'yobi_grid_row-vertical',
        'yobi_grid_slider-horizontal',
        'yobi_grid_slider-horizontal-2',
        'yobi_grid_slider-vertical',
        'yobi_grid_slider-vertical-2',
        'yobi_hardware_airdrop',
        'yobi_hardware_airpod',
        'yobi_hardware_airpods',
        'yobi_hardware_bluetooth',
        'yobi_hardware_bluetooth-2',
        'yobi_hardware_bluetooth-circle',
        'yobi_hardware_bluetooth-rectangle',
        'yobi_hardware_clock',
        'yobi_hardware_cloud-add',
        'yobi_hardware_cloud-change',
        'yobi_hardware_cloud-connection',
        'yobi_hardware_cloud-remove',
        'yobi_hardware_cpu',
        'yobi_hardware_cpu-charge',
        'yobi_hardware_cpu-setting',
        'yobi_hardware_devices',
        'yobi_hardware_driver',
        'yobi_hardware_driver-2',
        'yobi_hardware_driver-refresh',
        'yobi_hardware_electricity',
        'yobi_hardware_external-drive',
        'yobi_hardware_folder-connection',
        'yobi_hardware_game',
        'yobi_hardware_gameboy',
        'yobi_hardware_headphone',
        'yobi_hardware_headphones',
        'yobi_hardware_keyboard',
        'yobi_hardware_keyboard-open',
        'yobi_hardware_lamp',
        'yobi_hardware_microscope',
        'yobi_hardware_mirroring-screen',
        'yobi_hardware_monitor',
        'yobi_hardware_monitor-mobbile',
        'yobi_hardware_monitor-recorder',
        'yobi_hardware_mouse',
        'yobi_hardware_music-play',
        'yobi_hardware_printer',
        'yobi_hardware_printer-slash',
        'yobi_hardware_ram',
        'yobi_hardware_ram-2',
        'yobi_hardware_simcard',
        'yobi_hardware_simcard-2',
        'yobi_hardware_simcard-3',
        'yobi_hardware_speaker',
        'yobi_hardware_watch',
        'yobi_hardware_watch-status',
        'yobi_hardware_weight',
        'yobi_hardware-mobile',
        'yobi_huh_aquarius',
        'yobi_huh_gemini',
        'yobi_huh_gemini-2',
        'yobi_huh_man',
        'yobi_huh_sagittarius',
        'yobi_huh_woman',
        'yobi_learn_award',
        'yobi_learn_book',
        'yobi_learn_book-2',
        'yobi_learn_bookmark',
        'yobi_learn_bookmark-2',
        'yobi_learn_briefcase',
        'yobi_learn_brifecase-cross',
        'yobi_learn_brifecase-tick',
        'yobi_learn_brifecase-timer',
        'yobi_learn_calculator',
        'yobi_learn_clipboard',
        'yobi_learn_gift',
        'yobi_learn_note',
        'yobi_learn_note-2',
        'yobi_learn_teacher',
        'yobi_logo_aave-aave',
        'yobi_logo_android',
        'yobi_logo_ankr-ankr',
        'yobi_logo_apple',
        'yobi_logo_augur-rep',
        'yobi_logo_autonio-niox',
        'yobi_logo_avalanche-avax',
        'yobi_logo_be',
        'yobi_logo_binance-coin-bnb',
        'yobi_logo_binance-usd-busd',
        'yobi_logo_bitcoin-btc',
        'yobi_logo_blogger',
        'yobi_logo_bootsrap',
        'yobi_logo_cardano-ada',
        'yobi_logo_celo-celo',
        'yobi_logo_celsius-cel',
        'yobi_logo_chainlink-link',
        'yobi_logo_civic-cvc',
        'yobi_logo_dai-dai',
        'yobi_logo_dash-dash',
        'yobi_logo_decred-dcr',
        'yobi_logo_dent-dent',
        'yobi_logo_dropbox',
        'yobi_logo_educare-ekt',
        'yobi_logo_emercoin-emc',
        'yobi_logo_enjin-coin-enj',
        'yobi_logo_eos-eos',
        'yobi_logo_ethereum-eth',
        'yobi_logo_ethereum-classic-etc',
        'yobi_logo_facebook',
        'yobi_logo_figma',
        'yobi_logo_figma-2',
        'yobi_logo_frame',
        'yobi_logo_frame-2',
        'yobi_logo_framer',
        'yobi_logo_ftx-token-ftt',
        'yobi_logo_google',
        'yobi_logo_google-2',
        'yobi_logo_google-play',
        'yobi_logo_harmony-one',
        'yobi_logo_hedera-hashgraph-hbar',
        'yobi_logo_hex-hex',
        'yobi_logo_html-3',
        'yobi_logo_html-5',
        'yobi_logo_huobi-token-ht',
        'yobi_logo_icon-icx',
        'yobi_logo_illustrator',
        'yobi_logo_iost-iost',
        'yobi_logo_java-script',
        'yobi_logo_js',
        'yobi_logo_kyber-network-knc',
        'yobi_logo_litecoinltc',
        'yobi_logo_maker-mkr',
        'yobi_logo_messenger',
        'yobi_logo_monero-xmr',
        'yobi_logo_nebulas-nas',
        'yobi_logo_nem-xem',
        'yobi_logo_ocean-protocol-ocean',
        'yobi_logo_okb-okb',
        'yobi_logo_ontology-ont',
        'yobi_logo_paypal',
        'yobi_logo_photoshop',
        'yobi_logo_polkadot-dot',
        'yobi_logo_polygon-matic',
        'yobi_logo_python',
        'yobi_logo_quant-qnt',
        'yobi_logo_siacoin-sc',
        'yobi_logo_slack',
        'yobi_logo_snapchat',
        'yobi_logo_solana-sol',
        'yobi_logo_spotify',
        'yobi_logo_stacks-stx',
        'yobi_logo_stellar-xlm',
        'yobi_logo_tenx-pay',
        'yobi_logo_tether-usdt',
        'yobi_logo_the-graph-grt',
        'yobi_logo_theta-theta',
        'yobi_logo_thorchain-rune',
        'yobi_logo_trello',
        'yobi_logo_triangle',
        'yobi_logo_trontron-trx',
        'yobi_logo_twitch',
        'yobi_logo_usd-coin-usdc',
        'yobi_logo_velas-vlx',
        'yobi_logo_vibe-vibe',
        'yobi_logo_wanchain-wan',
        'yobi_logo_wanchain-wan-2',
        'yobi_logo_whatsapp',
        'yobi_logo_windows',
        'yobi_logo_wing-wing',
        'yobi_logo_xd',
        'yobi_logo_xiaomi',
        'yobi_logo_xrp-xrp',
        'yobi_logo_youtube',
        'yobi_logo_zel-zel',
        'yobi_logo_zoom',
        'yobi_map_arrow',
        'yobi_map_arrow-square',
        'yobi_map_direct-down',
        'yobi_map_direct-left',
        'yobi_map_direct-right',
        'yobi_map_direct-up',
        'yobi_map_discover',
        'yobi_map_global',
        'yobi_map_global-edit',
        'yobi_map_global-refresh',
        'yobi_map_global-search',
        'yobi_map_gps',
        'yobi_map_gps-slash',
        'yobi_map_location',
        'yobi_map_location-add',
        'yobi_map_location-cross',
        'yobi_map_location-minus',
        'yobi_map_location-slash',
        'yobi_map_location-tick',
        'yobi_map_map',
        'yobi_map_map-2',
        'yobi_map_picture-frame',
        'yobi_map_radar',
        'yobi_map_radar-2',
        'yobi_map_route-square',
        'yobi_map_routing',
        'yobi_map_routing-2',
        'yobi_media_audio-square',
        'yobi_media_backward',
        'yobi_media_backward-5-seconds',
        'yobi_media_backward-10-seconds',
        'yobi_media_backward-15-seconds',
        'yobi_media_camera',
        'yobi_media_camera-slash',
        'yobi_media_devices',
        'yobi_media_forward',
        'yobi_media_forward-5-seconds',
        'yobi_media_forward-10-seconds',
        'yobi_media_forward-15-seconds',
        'yobi_media_gallery',
        'yobi_media_gallery-add',
        'yobi_media_gallery-edit',
        'yobi_media_gallery-export',
        'yobi_media_gallery-favorite',
        'yobi_media_gallery-import',
        'yobi_media_gallery-remove',
        'yobi_media_gallery-slash',
        'yobi_media_gallery-tick',
        'yobi_media_group',
        'yobi_media_image',
        'yobi_media_maximize-circle',
        'yobi_media_microphone',
        'yobi_media_microphone-2',
        'yobi_media_microphone-slash',
        'yobi_media_microphone-slash-2',
        'yobi_media_mini-music-sqaure',
        'yobi_media_music',
        'yobi_media_music-circle',
        'yobi_media_music-dashboard',
        'yobi_media_music-filter',
        'yobi_media_music-library-2',
        'yobi_media_musicnote',
        'yobi_media_music-playlist',
        'yobi_media_music-square',
        'yobi_media_music-square-add',
        'yobi_media_music-square-remove',
        'yobi_media_music-square-search',
        'yobi_media_next',
        'yobi_media_note-square',
        'yobi_media_pause',
        'yobi_media_pause-circle',
        'yobi_media_play',
        'yobi_media_play-add',
        'yobi_media_play-circle',
        'yobi_media_play-cricle',
        'yobi_media_play-remove',
        'yobi_media_previous',
        'yobi_media_radio',
        'yobi_media_record',
        'yobi_media_record-circle',
        'yobi_media_repeate-music',
        'yobi_media_repeate-one',
        'yobi_media_scissor',
        'yobi_media_screenmirroring',
        'yobi_media_stop',
        'yobi_media_stop-circle',
        'yobi_media_subtitle',
        'yobi_media_video',
        'yobi_media_video-add',
        'yobi_media_video-circle',
        'yobi_media_video-horizontal',
        'yobi_media_video-octagon',
        'yobi_media_video-play',
        'yobi_media_video-remove',
        'yobi_media_video-slash',
        'yobi_media_video-square',
        'yobi_media_video-tick',
        'yobi_media_video-time',
        'yobi_media_video-vertical',
        'yobi_media_voice-cricle',
        'yobi_media_voice-square',
        'yobi_media_volume-cross',
        'yobi_media_volume-high',
        'yobi_media_volume-low',
        'yobi_media_volume-low-2',
        'yobi_media_volume-mute',
        'yobi_media_volume-slash',
        'yobi_media_volume-up',
        'yobi_misc_3dcube',
        'yobi_misc_add',
        'yobi_misc_add-circle',
        'yobi_misc_add-square',
        'yobi_misc_archive',
        'yobi_misc_autobrightness',
        'yobi_misc_battery-2full',
        'yobi_misc_battery-charging',
        'yobi_misc_battery-disable',
        'yobi_misc_battery-empty',
        'yobi_misc_battery-empty-2',
        'yobi_misc_battery-full',
        'yobi_misc_box-2',
        'yobi_misc_broom',
        'yobi_misc_bubble',
        'yobi_misc_cake',
        'yobi_misc_cd',
        'yobi_misc_chart',
        'yobi_misc_chrome',
        'yobi_misc_close-circle',
        'yobi_misc_close-square',
        'yobi_misc_coffee',
        'yobi_misc_computing',
        'yobi_misc_crown',
        'yobi_misc_crown-2',
        'yobi_misc_cup',
        'yobi_misc_danger',
        'yobi_misc_diamonds',
        'yobi_misc_discover',
        'yobi_misc_emoji-happy',
        'yobi_misc_emoji-normal',
        'yobi_misc_emoji-sad',
        'yobi_misc_filter',
        'yobi_misc_filter-add',
        'yobi_misc_filter-edit',
        'yobi_misc_filter-remove',
        'yobi_misc_filter-search',
        'yobi_misc_filter-square',
        'yobi_misc_filter-tick',
        'yobi_misc_flag',
        'yobi_misc_flag-2',
        'yobi_misc_flash',
        'yobi_misc_flash-circle',
        'yobi_misc_flash-slash',
        'yobi_misc_ghost',
        'yobi_misc_glass',
        'yobi_misc_grammerly',
        'yobi_misc_happyemoji',
        'yobi_misc_home',
        'yobi_misc_home-2',
        'yobi_misc_home-3',
        'yobi_misc_home-wifi',
        'yobi_misc_info-circle',
        'yobi_misc_information',
        'yobi_misc_instagram',
        'yobi_misc_judge',
        'yobi_misc_lamp',
        'yobi_misc_level',
        'yobi_misc_menu',
        'yobi_misc_milk',
        'yobi_misc_minus',
        'yobi_misc_minus-cirlce',
        'yobi_misc_minus-square',
        'yobi_misc_mirror',
        'yobi_misc_more-circle',
        'yobi_misc_more-square',
        'yobi_misc_mouse',
        'yobi_misc_mouse-circle',
        'yobi_misc_mouse-square',
        'yobi_misc_no',
        'yobi_misc_no-2',
        'yobi_misc_pet',
        'yobi_misc_ranking',
        'yobi_misc_reserve',
        'yobi_misc_safe-home',
        'yobi_misc_send',
        'yobi_misc_send-2',
        'yobi_misc_share',
        'yobi_misc_signpost',
        'yobi_misc_slash',
        'yobi_misc_slider',
        'yobi_misc_smart-home',
        'yobi_misc_sort',
        'yobi_misc_sound',
        'yobi_misc_speedometer',
        'yobi_misc_status',
        'yobi_misc_sticker',
        'yobi_misc_story',
        'yobi_misc_tag-cross',
        'yobi_misc_tag-right',
        'yobi_misc_tick-circle',
        'yobi_misc_tick-square',
        'yobi_misc_trash',
        'yobi_misc_tree',
        'yobi_misc_triangle',
        'yobi_misc_trush-square',
        'yobi_misc_verify',
        'yobi_misc_warning-2',
        'yobi_misc_weight',
        'yobi_misc_wifi',
        'yobi_misc_wifi-square',
        'yobi_money_archive',
        'yobi_money_card',
        'yobi_money_card-add',
        'yobi_money_card-edit',
        'yobi_money_card-pos',
        'yobi_money_card-receive',
        'yobi_money_card-remove',
        'yobi_money_card-remove-2',
        'yobi_money_cards',
        'yobi_money_card-send',
        'yobi_money_card-slash',
        'yobi_money_card-tick',
        'yobi_money_card-tick-2',
        'yobi_money_chart-square',
        'yobi_money_coin',
        'yobi_money_coin-2',
        'yobi_money_discount-circle',
        'yobi_money_discount-shape',
        'yobi_money_document',
        'yobi_money_dollar-circle',
        'yobi_money_dollar-square',
        'yobi_money_empty-wallet',
        'yobi_money_empty-wallet-add',
        'yobi_money_empty-wallet-change',
        'yobi_money_empty-wallet-remove',
        'yobi_money_empty-wallet-tick',
        'yobi_money_empty-wallet-time',
        'yobi_money_group',
        'yobi_money_group-2',
        'yobi_money_math',
        'yobi_money_money',
        'yobi_money_money-2',
        'yobi_money_money-3',
        'yobi_money_money-4',
        'yobi_money_money-add',
        'yobi_money_money-change',
        'yobi_money_money-forbidden',
        'yobi_money_money-recive',
        'yobi_money_money-remove',
        'yobi_money_moneys',
        'yobi_money_money-send',
        'yobi_money_money-tick',
        'yobi_money_money-time',
        'yobi_money_percentage-square',
        'yobi_money_receipt',
        'yobi_money_receipt-2',
        'yobi_money_receipt-3',
        'yobi_money_receipt-4',
        'yobi_money_receipt-add',
        'yobi_money_receipt-discount',
        'yobi_money_receipt-disscount',
        'yobi_money_receipt-edit',
        'yobi_money_receipt-item',
        'yobi_money_receipt-minus',
        'yobi_money_receipt-search',
        'yobi_money_receipt-text',
        'yobi_money_security-card',
        'yobi_money_strongbox',
        'yobi_money_strongbox-2',
        'yobi_money_tag',
        'yobi_money_tag-2',
        'yobi_money_ticket',
        'yobi_money_ticket-2',
        'yobi_money_ticket-discount',
        'yobi_money_ticket-expired',
        'yobi_money_ticket-star',
        'yobi_money_transaction-minus',
        'yobi_money_wallet',
        'yobi_money_wallet-2',
        'yobi_money_wallet-3',
        'yobi_money_wallet-4',
        'yobi_money_wallet-add',
        'yobi_money_wallet-add-2',
        'yobi_money_wallet-check',
        'yobi_money_wallet-minus',
        'yobi_money_wallet-money',
        'yobi_money_wallet-remove',
        'yobi_money_wallet-search',
        'yobi_move_arrange-circle',
        'yobi_move_arrange-circle-2',
        'yobi_move_arrange-square',
        'yobi_move_arrange-square-2',
        'yobi_move_arrow-2',
        'yobi_move_arrow-3',
        'yobi_move_arrow-circle-down',
        'yobi_move_arrow-circle-left',
        'yobi_move_arrow-circle-right',
        'yobi_move_arrow-down',
        'yobi_move_arrow-down-2',
        'yobi_move_arrow-down-3',
        'yobi_move_arrow-down-4',
        'yobi_move_arrow-left',
        'yobi_move_arrow-left-2',
        'yobi_move_arrow-left-3',
        'yobi_move_arrow-left-4',
        'yobi_move_arrow-right',
        'yobi_move_arrow-right-2',
        'yobi_move_arrow-right-3',
        'yobi_move_arrow-right-4',
        'yobi_move_arrow-square-down',
        'yobi_move_arrow-square-left',
        'yobi_move_arrow-square-right',
        'yobi_move_arrow-square-up',
        'yobi_move_arrow-swap-horizontal',
        'yobi_move_arrow-up',
        'yobi_move_arrow-up-2',
        'yobi_move_arrow-up-3',
        'yobi_move_arrow-up-4',
        'yobi_move_back-square',
        'yobi_move_convert',
        'yobi_move_export',
        'yobi_move_export-2',
        'yobi_move_export-3',
        'yobi_move_export-4',
        'yobi_move_forward-square',
        'yobi_move_frame',
        'yobi_move_frame-2',
        'yobi_move_frame-3',
        'yobi_move_import',
        'yobi_move_import-2',
        'yobi_move_import-3',
        'yobi_move_login',
        'yobi_move_login-2',
        'yobi_move_logout',
        'yobi_move_logout-2',
        'yobi_move_received',
        'yobi_move_receive-square',
        'yobi_move_receive-square-2',
        'yobi_move_redo',
        'yobi_move_refresh',
        'yobi_move_refresh-2',
        'yobi_move_refresh-circle',
        'yobi_move_refresh-left-square',
        'yobi_move_refresh-right-square',
        'yobi_move_refresh-square-2',
        'yobi_move_repeat',
        'yobi_move_repeat-circle',
        'yobi_move_rotate-left',
        'yobi_move_rotate-right',
        'yobi_move_send',
        'yobi_move_send-sqaure-2',
        'yobi_move_send-square',
        'yobi_move_undo',
        'yobi_notification_bell',
        'yobi_notification_bell-bing',
        'yobi_notification_lamp-charge',
        'yobi_notification_lamp-on',
        'yobi_notification_lamp-slash',
        'yobi_notification_notification',
        'yobi_notification_notification-circle',
        'yobi_notification_notification-favorite',
        'yobi_notification_notification-status',
        'yobi_programing_code',
        'yobi_programing_code-2',
        'yobi_programing_code-circle',
        'yobi_programing_command',
        'yobi_programing_command-square',
        'yobi_programing_data',
        'yobi_programing_data-2',
        'yobi_programing_document-code',
        'yobi_programing_document-code-2',
        'yobi_programing_hashtag',
        'yobi_programing_hashtag-down',
        'yobi_programing_hashtag-up',
        'yobi_programing_hierarchy',
        'yobi_programing_hierarchy-2',
        'yobi_programing_hierarchy-3',
        'yobi_programing_hierarchy-square',
        'yobi_programing_hierarchy-square-2',
        'yobi_programing_hierarchy-square-3',
        'yobi_programing_message-programming',
        'yobi_programing_mobile-programming',
        'yobi_programing_programming-arrow',
        'yobi_programing_programming-arrows',
        'yobi_programing_scroll',
        'yobi_programing_sidebar-bottom',
        'yobi_programing_sidebar-left',
        'yobi_programing_sidebar-right',
        'yobi_programing_sidebar-top',
        'yobi_search_favorite',
        'yobi_search_favorite-2',
        'yobi_search_normal',
        'yobi_search_normal-2',
        'yobi_search_status',
        'yobi_search_status-2',
        'yobi_search_zoom-in',
        'yobi_search_zoom-in-2',
        'yobi_search_zoom-out',
        'yobi_search_zoom-out-2',
        'yobi_security_alarm',
        'yobi_security_check',
        'yobi_security_eye',
        'yobi_security_eye-slash',
        'yobi_security_finger-cricle',
        'yobi_security_finger-scan',
        'yobi_security_key',
        'yobi_security_key-square',
        'yobi_security_lock',
        'yobi_security_lock-2',
        'yobi_security_lock-circle',
        'yobi_security_lock-slash',
        'yobi_security_password-check',
        'yobi_security_radar',
        'yobi_security_scan',
        'yobi_security_scan-barcode',
        'yobi_security_scanner',
        'yobi_security_scanning',
        'yobi_security_security',
        'yobi_security_security-safe',
        'yobi_security_security-user',
        'yobi_security_shield',
        'yobi_security_shield-cross',
        'yobi_security_shield-search',
        'yobi_security_shield-security',
        'yobi_security_shield-slash',
        'yobi_security_shield-tick',
        'yobi_security_unlock',
        'yobi_settings_candle',
        'yobi_settings_candle-2',
        'yobi_settings_category',
        'yobi_settings_category-2',
        'yobi_settings_menu',
        'yobi_settings_more',
        'yobi_settings_more-2',
        'yobi_settings_setting',
        'yobi_settings_setting-2',
        'yobi_settings_setting-3',
        'yobi_settings_setting-4',
        'yobi_settings_setting-5',
        'yobi_settings_settings',
        'yobi_settings_toggle-off',
        'yobi_settings_toggle-off-circle',
        'yobi_settings_toggle-on',
        'yobi_settings_toggle-on-circle',
        'yobi_shop_bag',
        'yobi_shop_bag-2',
        'yobi_shop_bag-cross',
        'yobi_shop_bag-cross-2',
        'yobi_shop_bag-happy',
        'yobi_shop_bag-tick',
        'yobi_shop_bag-tick-2',
        'yobi_shop_bag-timer',
        'yobi_shop_barcode',
        'yobi_shop_shop',
        'yobi_shop_shop-add',
        'yobi_shop_shopping-bag',
        'yobi_shop_shopping-cart',
        'yobi_shop_shop-remove',
        'yobi_social_24-support',
        'yobi_social_dislike',
        'yobi_social_heart',
        'yobi_social_heart-add',
        'yobi_social_heart-circle',
        'yobi_social_heart-edit',
        'yobi_social_heart-remove',
        'yobi_social_heart-search',
        'yobi_social_heart-slash',
        'yobi_social_heart-tick',
        'yobi_social_like',
        'yobi_social_like-dislike',
        'yobi_social_likes',
        'yobi_social_like-shapes',
        'yobi_social_like-tag',
        'yobi_social_lovely',
        'yobi_social_magic-star',
        'yobi_social_medal',
        'yobi_social_medal-star',
        'yobi_social_message-question',
        'yobi_social_ranking',
        'yobi_social_smileys',
        'yobi_social_star',
        'yobi_social_stars',
        'yobi_social_star-slash',
        'yobi_social_unlimited',
        'yobi_text_attach-circle',
        'yobi_text_attach-square',
        'yobi_text_eraser',
        'yobi_text_firstline',
        'yobi_text_language-circle',
        'yobi_text_language-square',
        'yobi_text_link',
        'yobi_text_link-2',
        'yobi_text_link-3',
        'yobi_text_link-4',
        'yobi_text_link-circle',
        'yobi_text_link-square',
        'yobi_text_maximize',
        'yobi_text_paperclip',
        'yobi_text_paperclip-2',
        'yobi_text_pharagraphspacing',
        'yobi_text_quote-down',
        'yobi_text_quote-down-circle',
        'yobi_text_quote-down-square',
        'yobi_text_quote-up',
        'yobi_text_quote-up-circle',
        'yobi_text_quote-up-square',
        'yobi_text_smallcaps',
        'yobi_text_text',
        'yobi_text_textalign-center',
        'yobi_text_textalign-justifycenter',
        'yobi_text_textalign-justifyleft',
        'yobi_text_textalign-justifyright',
        'yobi_text_textalign-left',
        'yobi_text_textalign-right',
        'yobi_text_text-block',
        'yobi_text_text-bold',
        'yobi_text_text-italic',
        'yobi_text_text-underline',
        'yobi_text_translate',
        'yobi_time_calendar',
        'yobi_time_calendar-2',
        'yobi_time_calendar-add',
        'yobi_time_calendar-circle',
        'yobi_time_calendar-edit',
        'yobi_time_calendar-remove',
        'yobi_time_calendar-search',
        'yobi_time_calendar-tick',
        'yobi_time_clock',
        'yobi_time_security-time',
        'yobi_time_time',
        'yobi_time_timer',
        'yobi_time_timer-pause',
        'yobi_time_timer-start',
        'yobi_user_people',
        'yobi_user_profile',
        'yobi_user_profile-2user',
        'yobi_user_profile-add',
        'yobi_user_profile-circle',
        'yobi_user_profile-delete',
        'yobi_user_profile-remove',
        'yobi_user_profile-tick',
        'yobi_user_tag-user',
        'yobi_user_user',
        'yobi_user_user-add',
        'yobi_user_user-cirlce-add',
        'yobi_user_user-edit',
        'yobi_user_user-minus',
        'yobi_user_user-octagon',
        'yobi_user_user-remove',
        'yobi_user_user-search',
        'yobi_user_user-square',
        'yobi_user_user-tag',
        'yobi_user_user-tick',
        'yobi_weather_cloud',
        'yobi_weather_cloud-cross',
        'yobi_weather_cloud-drizzle',
        'yobi_weather_cloud-fog',
        'yobi_weather_cloud-lightning',
        'yobi_weather_cloud-minus',
        'yobi_weather_cloud-notif',
        'yobi_weather_cloud-plus',
        'yobi_weather_cloud-snow',
        'yobi_weather_cloud-sunny',
        'yobi_weather_drop',
        'yobi_weather_flash',
        'yobi_weather_moon',
        'yobi_weather_sun',
        'yobi_weather_sun-2',
        'yobi_weather_sun-fog',
        'yobi_weather_wind',
        'yobi_weather_wind-2',
      ]
    >;
    features: Schema.Attribute.Relation<'manyToMany', 'api::feature.feature'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::subfeature.subfeature'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTagTag extends Struct.CollectionTypeSchema {
  collectionName: 'tags';
  info: {
    description: 'Tags for categorizing blog posts';
    displayName: 'Tag';
    pluralName: 'tags';
    singularName: 'tag';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    ai_agents: Schema.Attribute.Relation<
      'manyToMany',
      'api::ai-agent.ai-agent'
    >;
    blogs: Schema.Attribute.Relation<'manyToMany', 'api::blog.blog'>;
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    features: Schema.Attribute.Relation<'manyToMany', 'api::feature.feature'>;
    icon: Schema.Attribute.Enumeration<
      [
        'yobi_a_space,',
        'yobi_archive_archive-add,',
        'yobi_archive_archive-minus,',
        'yobi_archive_archive-slash,',
        'yobi_archive_archive-tick,',
        'yobi_archive_book-saved,',
        'yobi_archive_book-square,',
        'yobi_archive_frame,',
        'yobi_archive_receipt-square,',
        'yobi_archive_save-2,',
        'yobi_archive_save-add,',
        'yobi_archive_save-minus,',
        'yobi_archive_save-remove,',
        'yobi_art_additem,',
        'yobi_art_backward-item,',
        'yobi_art_bezier,',
        'yobi_art_blend,',
        'yobi_art_blend-2,',
        'yobi_art_blur,',
        'yobi_art_brush,',
        'yobi_art_brush-2,',
        'yobi_art_brush-3,',
        'yobi_art_brush-4,',
        'yobi_art_bucket-circle,',
        'yobi_art_bucket-square,',
        'yobi_art_colorfilter,',
        'yobi_art_colors-square,',
        'yobi_art_color-swatch,',
        'yobi_art_component,',
        'yobi_art_copy,',
        'yobi_art_copy-success,',
        'yobi_art_designtools,',
        'yobi_art_eraser,',
        'yobi_art_flash-circle,',
        'yobi_art_forward-item,',
        'yobi_art_glass,',
        'yobi_art_group,',
        'yobi_art_group-2,',
        'yobi_art_layer,',
        'yobi_art_lifebuoy,',
        'yobi_art_magicpen,',
        'yobi_art_main-component,',
        'yobi_art_mask,',
        'yobi_art_mask-2,',
        'yobi_art_mask-3,',
        'yobi_art_omega-circle,',
        'yobi_art_omega-square,',
        'yobi_art_paintbucket,',
        'yobi_art_path,',
        'yobi_art_path-2,',
        'yobi_art_path-square,',
        'yobi_art_pen-add,',
        'yobi_art_pen-close,',
        'yobi_art_pen-remove,',
        'yobi_art_pen-tool,',
        'yobi_art_pen-tool-2,',
        'yobi_art_recovery-convert,',
        'yobi_art_rulerpen,',
        'yobi_art_ruler,',
        'yobi_art_scissor,',
        'yobi_art_shapes,',
        'yobi_art_shapes-2,',
        'yobi_art_size,',
        'yobi_biz_activity,',
        'yobi_biz_chart,',
        'yobi_biz_chart-2,',
        'yobi_biz_chart-3,',
        'yobi_biz_chart-4,',
        'yobi_biz_chart-success,',
        'yobi_biz_diagram,',
        'yobi_biz_favorite-chart,',
        'yobi_biz_frame,',
        'yobi_biz_graph,',
        'yobi_biz_hashtag,',
        'yobi_biz_health,',
        'yobi_biz_home-hashtag,',
        'yobi_biz_home-trend-down,',
        'yobi_biz_home-trend-up,',
        'yobi_biz_personalcard,',
        'yobi_biz_presention-chart,',
        'yobi_biz_status-up,',
        'yobi_biz_trend-down,',
        'yobi_biz_trend-up,',
        'yobi_building_bank,',
        'yobi_building_building-2,',
        'yobi_building_building-3,',
        'yobi_building_building-4,',
        'yobi_building_buildings,',
        'yobi_building_buliding,',
        'yobi_building_courthouse,',
        'yobi_building_default,',
        'yobi_building_hospital,',
        'yobi_building_house,',
        'yobi_building_house-2,',
        'yobi_call,',
        'yobi_call_add,',
        'yobi_call_calling,',
        'yobi_call_incoming,',
        'yobi_call_minus,',
        'yobi_call_outgoing,',
        'yobi_call_received,',
        'yobi_call_remove,',
        'yobi_call_slash,',
        'yobi_car_airplane,',
        'yobi_car_airplane-square,',
        'yobi_car_bus,',
        'yobi_car_car,',
        'yobi_car_driving,',
        'yobi_car_gas-station,',
        'yobi_car_ship,',
        'yobi_car_smart-car,',
        'yobi_chat_device-message,',
        'yobi_chat_direct,',
        'yobi_chat_directbox-default,',
        'yobi_chat_directbox-notif,',
        'yobi_chat_directbox-receive,',
        'yobi_chat_directbox-send,',
        'yobi_chat_direct-inbox,',
        'yobi_chat_direct-normal,',
        'yobi_chat_direct-notification,',
        'yobi_chat_direct-send,',
        'yobi_chat_message,',
        'yobi_chat_message-2,',
        'yobi_chat_message-add,',
        'yobi_chat_message-add-2,',
        'yobi_chat_message-circle,',
        'yobi_chat_message-edit,',
        'yobi_chat_message-favorite,',
        'yobi_chat_message-minus,',
        'yobi_chat_message-notif,',
        'yobi_chat_message-remove,',
        'yobi_chat_messages,',
        'yobi_chat_messages-2,',
        'yobi_chat_messages-3,',
        'yobi_chat_messages-4,',
        'yobi_chat_message-search,',
        'yobi_chat_message-square,',
        'yobi_chat_message-text,',
        'yobi_chat_message-text-2,',
        'yobi_chat_message-tick,',
        'yobi_chat_message-time,',
        'yobi_chat_sms,',
        'yobi_chat_sms-edit,',
        'yobi_chat_sms-notification,',
        'yobi_chat_sms-search,',
        'yobi_chat_sms-star,',
        'yobi_chat_sms-tracking,',
        'yobi_content_archive-book,',
        'yobi_content_bill,',
        'yobi_content_clipboard-close,',
        'yobi_content_clipboard-export,',
        'yobi_content_clipboard-import,',
        'yobi_content_clipboard-text,',
        'yobi_content_clipboard-tick,',
        'yobi_content_copyright,',
        'yobi_content_creative-commons,',
        'yobi_content_document,',
        'yobi_content_document-cloud,',
        'yobi_content_document-copy,',
        'yobi_content_document-download,',
        'yobi_content_document-favorite,',
        'yobi_content_document-filter,',
        'yobi_content_document-forward,',
        'yobi_content_document-like,',
        'yobi_content_document-normal,',
        'yobi_content_document-previous,',
        'yobi_content_document-sketch,',
        'yobi_content_document-text,',
        'yobi_content_document-text-2,',
        'yobi_content_document-upload,',
        'yobi_content_edit,',
        'yobi_content_edit-2,',
        'yobi_content_menu-board,',
        'yobi_content_note,',
        'yobi_content_note-2,',
        'yobi_content_note-add,',
        'yobi_content_note-favorite,',
        'yobi_content_note-remove,',
        'yobi_content_note-text,',
        'yobi_content_stickynote,',
        'yobi_content_task,',
        'yobi_content_task-square,',
        'yobi_crypto_bitcoin-card,',
        'yobi_crypto_bitcoin-convert,',
        'yobi_crypto_bitcoin-refresh,',
        'yobi_crypto_buy-crypto,',
        'yobi_crypto_card-coin,',
        'yobi_crypto_trade,',
        'yobi_delivery_3d-cube-scan,',
        'yobi_delivery_3d-rotate,',
        'yobi_delivery_3d-square,',
        'yobi_delivery_box,',
        'yobi_delivery_box-2,',
        'yobi_delivery_box-add,',
        'yobi_delivery_box-remove,',
        'yobi_delivery_box-search,',
        'yobi_delivery_box-tick,',
        'yobi_delivery_box-time,',
        'yobi_delivery_convert-3d-cube,',
        'yobi_delivery_group,',
        'yobi_delivery_groups,',
        'yobi_delivery_truck-remove,',
        'yobi_delivery_truck-tick,',
        'yobi_delivery_truck-time,',
        'yobi_folder_2,',
        'yobi_folder_add,',
        'yobi_folder_cloud,',
        'yobi_folder_cross,',
        'yobi_folder_favorite,',
        'yobi_folder_folder,',
        'yobi_folder_minus,',
        'yobi_folder_open,',
        'yobi_grid_3square,',
        'yobi_grid_align-bottom,',
        'yobi_grid_align-horizontally,',
        'yobi_grid_align-left,',
        'yobi_grid_align-right,',
        'yobi_grid_align-vertically,',
        'yobi_grid_convertshape,',
        'yobi_grid_convertshape-2,',
        'yobi_grid_crop,',
        'yobi_grid_element-1,',
        'yobi_grid_element-2,',
        'yobi_grid_element-3,',
        'yobi_grid_element-4,',
        'yobi_grid_element-equal,',
        'yobi_grid_element-plus,',
        'yobi_grid_fatrows,',
        'yobi_grid_format-circle,',
        'yobi_grid_format-square,',
        'yobi_grid_frame,',
        'yobi_grid_grid-1,',
        'yobi_grid_grid-2,',
        'yobi_grid_grid-3,',
        'yobi_grid_grid-4,',
        'yobi_grid_grid-5,',
        'yobi_grid_grid-6,',
        'yobi_grid_grid-7,',
        'yobi_grid_grid-8,',
        'yobi_grid_grid-9,',
        'yobi_grid_grid-edit,',
        'yobi_grid_grid-eraser,',
        'yobi_grid_grid-lock,',
        'yobi_grid_kanban,',
        'yobi_grid_maximize,',
        'yobi_grid_maximize-2,',
        'yobi_grid_maximize-3,',
        'yobi_grid_maximize-4,',
        'yobi_grid_maximize-5,',
        'yobi_grid_rotate-left,',
        'yobi_grid_rotate-right,',
        'yobi_grid_row-horizontal,',
        'yobi_grid_row-vertical,',
        'yobi_grid_slider-horizontal,',
        'yobi_grid_slider-horizontal-2,',
        'yobi_grid_slider-vertical,',
        'yobi_grid_slider-vertical-2,',
        'yobi_hardware_airdrop,',
        'yobi_hardware_airpod,',
        'yobi_hardware_airpods,',
        'yobi_hardware_bluetooth,',
        'yobi_hardware_bluetooth-2,',
        'yobi_hardware_bluetooth-circle,',
        'yobi_hardware_bluetooth-rectangle,',
        'yobi_hardware_clock,',
        'yobi_hardware_cloud-add,',
        'yobi_hardware_cloud-change,',
        'yobi_hardware_cloud-connection,',
        'yobi_hardware_cloud-remove,',
        'yobi_hardware_cpu,',
        'yobi_hardware_cpu-charge,',
        'yobi_hardware_cpu-setting,',
        'yobi_hardware_devices,',
        'yobi_hardware_driver,',
        'yobi_hardware_driver-2,',
        'yobi_hardware_driver-refresh,',
        'yobi_hardware_electricity,',
        'yobi_hardware_external-drive,',
        'yobi_hardware_folder-connection,',
        'yobi_hardware_game,',
        'yobi_hardware_gameboy,',
        'yobi_hardware_headphone,',
        'yobi_hardware_headphones,',
        'yobi_hardware_keyboard,',
        'yobi_hardware_keyboard-open,',
        'yobi_hardware_lamp,',
        'yobi_hardware_microscope,',
        'yobi_hardware_mirroring-screen,',
        'yobi_hardware_monitor,',
        'yobi_hardware_monitor-mobbile,',
        'yobi_hardware_monitor-recorder,',
        'yobi_hardware_mouse,',
        'yobi_hardware_music-play,',
        'yobi_hardware_printer,',
        'yobi_hardware_printer-slash,',
        'yobi_hardware_ram,',
        'yobi_hardware_ram-2,',
        'yobi_hardware_simcard,',
        'yobi_hardware_simcard-2,',
        'yobi_hardware_simcard-3,',
        'yobi_hardware_speaker,',
        'yobi_hardware_watch,',
        'yobi_hardware_watch-status,',
        'yobi_hardware_weight,',
        'yobi_hardware-mobile,',
        'yobi_huh_aquarius,',
        'yobi_huh_gemini,',
        'yobi_huh_gemini-2,',
        'yobi_huh_man,',
        'yobi_huh_sagittarius,',
        'yobi_huh_woman,',
        'yobi_learn_award,',
        'yobi_learn_book,',
        'yobi_learn_book-2,',
        'yobi_learn_bookmark,',
        'yobi_learn_bookmark-2,',
        'yobi_learn_briefcase,',
        'yobi_learn_brifecase-cross,',
        'yobi_learn_brifecase-tick,',
        'yobi_learn_brifecase-timer,',
        'yobi_learn_calculator,',
        'yobi_learn_clipboard,',
        'yobi_learn_gift,',
        'yobi_learn_note,',
        'yobi_learn_note-2,',
        'yobi_learn_teacher,',
        'yobi_logo_aave-aave,',
        'yobi_logo_android,',
        'yobi_logo_ankr-ankr,',
        'yobi_logo_apple,',
        'yobi_logo_augur-rep,',
        'yobi_logo_autonio-niox,',
        'yobi_logo_avalanche-avax,',
        'yobi_logo_be,',
        'yobi_logo_binance-coin-bnb,',
        'yobi_logo_binance-usd-busd,',
        'yobi_logo_bitcoin-btc,',
        'yobi_logo_blogger,',
        'yobi_logo_bootsrap,',
        'yobi_logo_cardano-ada,',
        'yobi_logo_celo-celo,',
        'yobi_logo_celsius-cel,',
        'yobi_logo_chainlink-link,',
        'yobi_logo_civic-cvc,',
        'yobi_logo_dai-dai,',
        'yobi_logo_dash-dash,',
        'yobi_logo_decred-dcr,',
        'yobi_logo_dent-dent,',
        'yobi_logo_dropbox,',
        'yobi_logo_educare-ekt,',
        'yobi_logo_emercoin-emc,',
        'yobi_logo_enjin-coin-enj,',
        'yobi_logo_eos-eos,',
        'yobi_logo_ethereum-eth,',
        'yobi_logo_ethereum-classic-etc,',
        'yobi_logo_facebook,',
        'yobi_logo_figma,',
        'yobi_logo_figma-2,',
        'yobi_logo_frame,',
        'yobi_logo_frame-2,',
        'yobi_logo_framer,',
        'yobi_logo_ftx-token-ftt,',
        'yobi_logo_google,',
        'yobi_logo_google-2,',
        'yobi_logo_google-play,',
        'yobi_logo_harmony-one,',
        'yobi_logo_hedera-hashgraph-hbar,',
        'yobi_logo_hex-hex,',
        'yobi_logo_html-3,',
        'yobi_logo_html-5,',
        'yobi_logo_huobi-token-ht,',
        'yobi_logo_icon-icx,',
        'yobi_logo_illustrator,',
        'yobi_logo_iost-iost,',
        'yobi_logo_java-script,',
        'yobi_logo_js,',
        'yobi_logo_kyber-network-knc,',
        'yobi_logo_litecoinltc,',
        'yobi_logo_maker-mkr,',
        'yobi_logo_messenger,',
        'yobi_logo_monero-xmr,',
        'yobi_logo_nebulas-nas,',
        'yobi_logo_nem-xem,',
        'yobi_logo_ocean-protocol-ocean,',
        'yobi_logo_okb-okb,',
        'yobi_logo_ontology-ont,',
        'yobi_logo_paypal,',
        'yobi_logo_photoshop,',
        'yobi_logo_polkadot-dot,',
        'yobi_logo_polygon-matic,',
        'yobi_logo_python,',
        'yobi_logo_quant-qnt,',
        'yobi_logo_siacoin-sc,',
        'yobi_logo_slack,',
        'yobi_logo_snapchat,',
        'yobi_logo_solana-sol,',
        'yobi_logo_spotify,',
        'yobi_logo_stacks-stx,',
        'yobi_logo_stellar-xlm,',
        'yobi_logo_tenx-pay,',
        'yobi_logo_tether-usdt,',
        'yobi_logo_the-graph-grt,',
        'yobi_logo_theta-theta,',
        'yobi_logo_thorchain-rune,',
        'yobi_logo_trello,',
        'yobi_logo_triangle,',
        'yobi_logo_trontron-trx,',
        'yobi_logo_twitch,',
        'yobi_logo_usd-coin-usdc,',
        'yobi_logo_velas-vlx,',
        'yobi_logo_vibe-vibe,',
        'yobi_logo_wanchain-wan,',
        'yobi_logo_wanchain-wan-2,',
        'yobi_logo_whatsapp,',
        'yobi_logo_windows,',
        'yobi_logo_wing-wing,',
        'yobi_logo_xd,',
        'yobi_logo_xiaomi,',
        'yobi_logo_xrp-xrp,',
        'yobi_logo_youtube,',
        'yobi_logo_zel-zel,',
        'yobi_logo_zoom,',
        'yobi_map_arrow,',
        'yobi_map_arrow-square,',
        'yobi_map_direct-down,',
        'yobi_map_direct-left,',
        'yobi_map_direct-right,',
        'yobi_map_direct-up,',
        'yobi_map_discover,',
        'yobi_map_global,',
        'yobi_map_global-edit,',
        'yobi_map_global-refresh,',
        'yobi_map_global-search,',
        'yobi_map_gps,',
        'yobi_map_gps-slash,',
        'yobi_map_location,',
        'yobi_map_location-add,',
        'yobi_map_location-cross,',
        'yobi_map_location-minus,',
        'yobi_map_location-slash,',
        'yobi_map_location-tick,',
        'yobi_map_map,',
        'yobi_map_map-2,',
        'yobi_map_picture-frame,',
        'yobi_map_radar,',
        'yobi_map_radar-2,',
        'yobi_map_route-square,',
        'yobi_map_routing,',
        'yobi_map_routing-2,',
        'yobi_media_audio-square,',
        'yobi_media_backward,',
        'yobi_media_backward-5-seconds,',
        'yobi_media_backward-10-seconds,',
        'yobi_media_backward-15-seconds,',
        'yobi_media_camera,',
        'yobi_media_camera-slash,',
        'yobi_media_devices,',
        'yobi_media_forward,',
        'yobi_media_forward-5-seconds,',
        'yobi_media_forward-10-seconds,',
        'yobi_media_forward-15-seconds,',
        'yobi_media_gallery,',
        'yobi_media_gallery-add,',
        'yobi_media_gallery-edit,',
        'yobi_media_gallery-export,',
        'yobi_media_gallery-favorite,',
        'yobi_media_gallery-import,',
        'yobi_media_gallery-remove,',
        'yobi_media_gallery-slash,',
        'yobi_media_gallery-tick,',
        'yobi_media_group,',
        'yobi_media_image,',
        'yobi_media_maximize-circle,',
        'yobi_media_microphone,',
        'yobi_media_microphone-2,',
        'yobi_media_microphone-slash,',
        'yobi_media_microphone-slash-2,',
        'yobi_media_mini-music-sqaure,',
        'yobi_media_music,',
        'yobi_media_music-circle,',
        'yobi_media_music-dashboard,',
        'yobi_media_music-filter,',
        'yobi_media_music-library-2,',
        'yobi_media_musicnote,',
        'yobi_media_music-playlist,',
        'yobi_media_music-square,',
        'yobi_media_music-square-add,',
        'yobi_media_music-square-remove,',
        'yobi_media_music-square-search,',
        'yobi_media_next,',
        'yobi_media_note-square,',
        'yobi_media_pause,',
        'yobi_media_pause-circle,',
        'yobi_media_play,',
        'yobi_media_play-add,',
        'yobi_media_play-circle,',
        'yobi_media_play-cricle,',
        'yobi_media_play-remove,',
        'yobi_media_previous,',
        'yobi_media_radio,',
        'yobi_media_record,',
        'yobi_media_record-circle,',
        'yobi_media_repeate-music,',
        'yobi_media_repeate-one,',
        'yobi_media_scissor,',
        'yobi_media_screenmirroring,',
        'yobi_media_stop,',
        'yobi_media_stop-circle,',
        'yobi_media_subtitle,',
        'yobi_media_video,',
        'yobi_media_video-add,',
        'yobi_media_video-circle,',
        'yobi_media_video-horizontal,',
        'yobi_media_video-octagon,',
        'yobi_media_video-play,',
        'yobi_media_video-remove,',
        'yobi_media_video-slash,',
        'yobi_media_video-square,',
        'yobi_media_video-tick,',
        'yobi_media_video-time,',
        'yobi_media_video-vertical,',
        'yobi_media_voice-cricle,',
        'yobi_media_voice-square,',
        'yobi_media_volume-cross,',
        'yobi_media_volume-high,',
        'yobi_media_volume-low,',
        'yobi_media_volume-low-2,',
        'yobi_media_volume-mute,',
        'yobi_media_volume-slash,',
        'yobi_media_volume-up,',
        'yobi_misc_3dcube,',
        'yobi_misc_add,',
        'yobi_misc_add-circle,',
        'yobi_misc_add-square,',
        'yobi_misc_archive,',
        'yobi_misc_autobrightness,',
        'yobi_misc_battery-2full,',
        'yobi_misc_battery-charging,',
        'yobi_misc_battery-disable,',
        'yobi_misc_battery-empty,',
        'yobi_misc_battery-empty-2,',
        'yobi_misc_battery-full,',
        'yobi_misc_box-2,',
        'yobi_misc_broom,',
        'yobi_misc_bubble,',
        'yobi_misc_cake,',
        'yobi_misc_cd,',
        'yobi_misc_chart,',
        'yobi_misc_chrome,',
        'yobi_misc_close-circle,',
        'yobi_misc_close-square,',
        'yobi_misc_coffee,',
        'yobi_misc_computing,',
        'yobi_misc_crown,',
        'yobi_misc_crown-2,',
        'yobi_misc_cup,',
        'yobi_misc_danger,',
        'yobi_misc_diamonds,',
        'yobi_misc_discover,',
        'yobi_misc_emoji-happy,',
        'yobi_misc_emoji-normal,',
        'yobi_misc_emoji-sad,',
        'yobi_misc_filter,',
        'yobi_misc_filter-add,',
        'yobi_misc_filter-edit,',
        'yobi_misc_filter-remove,',
        'yobi_misc_filter-search,',
        'yobi_misc_filter-square,',
        'yobi_misc_filter-tick,',
        'yobi_misc_flag,',
        'yobi_misc_flag-2,',
        'yobi_misc_flash,',
        'yobi_misc_flash-circle,',
        'yobi_misc_flash-slash,',
        'yobi_misc_ghost,',
        'yobi_misc_glass,',
        'yobi_misc_grammerly,',
        'yobi_misc_happyemoji,',
        'yobi_misc_home,',
        'yobi_misc_home-2,',
        'yobi_misc_home-3,',
        'yobi_misc_home-wifi,',
        'yobi_misc_info-circle,',
        'yobi_misc_information,',
        'yobi_misc_instagram,',
        'yobi_misc_judge,',
        'yobi_misc_lamp,',
        'yobi_misc_level,',
        'yobi_misc_menu,',
        'yobi_misc_milk,',
        'yobi_misc_minus,',
        'yobi_misc_minus-cirlce,',
        'yobi_misc_minus-square,',
        'yobi_misc_mirror,',
        'yobi_misc_more-circle,',
        'yobi_misc_more-square,',
        'yobi_misc_mouse,',
        'yobi_misc_mouse-circle,',
        'yobi_misc_mouse-square,',
        'yobi_misc_no,',
        'yobi_misc_no-2,',
        'yobi_misc_pet,',
        'yobi_misc_ranking,',
        'yobi_misc_reserve,',
        'yobi_misc_safe-home,',
        'yobi_misc_send,',
        'yobi_misc_send-2,',
        'yobi_misc_share,',
        'yobi_misc_signpost,',
        'yobi_misc_slash,',
        'yobi_misc_slider,',
        'yobi_misc_smart-home,',
        'yobi_misc_sort,',
        'yobi_misc_sound,',
        'yobi_misc_speedometer,',
        'yobi_misc_status,',
        'yobi_misc_sticker,',
        'yobi_misc_story,',
        'yobi_misc_tag-cross,',
        'yobi_misc_tag-right,',
        'yobi_misc_tick-circle,',
        'yobi_misc_tick-square,',
        'yobi_misc_trash,',
        'yobi_misc_tree,',
        'yobi_misc_triangle,',
        'yobi_misc_trush-square,',
        'yobi_misc_verify,',
        'yobi_misc_warning-2,',
        'yobi_misc_weight,',
        'yobi_misc_wifi,',
        'yobi_misc_wifi-square,',
        'yobi_money_archive,',
        'yobi_money_card,',
        'yobi_money_card-add,',
        'yobi_money_card-edit,',
        'yobi_money_card-pos,',
        'yobi_money_card-receive,',
        'yobi_money_card-remove,',
        'yobi_money_card-remove-2,',
        'yobi_money_cards,',
        'yobi_money_card-send,',
        'yobi_money_card-slash,',
        'yobi_money_card-tick,',
        'yobi_money_card-tick-2,',
        'yobi_money_chart-square,',
        'yobi_money_coin,',
        'yobi_money_coin-2,',
        'yobi_money_discount-circle,',
        'yobi_money_discount-shape,',
        'yobi_money_document,',
        'yobi_money_dollar-circle,',
        'yobi_money_dollar-square,',
        'yobi_money_empty-wallet,',
        'yobi_money_empty-wallet-add,',
        'yobi_money_empty-wallet-change,',
        'yobi_money_empty-wallet-remove,',
        'yobi_money_empty-wallet-tick,',
        'yobi_money_empty-wallet-time,',
        'yobi_money_group,',
        'yobi_money_group-2,',
        'yobi_money_math,',
        'yobi_money_money,',
        'yobi_money_money-2,',
        'yobi_money_money-3,',
        'yobi_money_money-4,',
        'yobi_money_money-add,',
        'yobi_money_money-change,',
        'yobi_money_money-forbidden,',
        'yobi_money_money-recive,',
        'yobi_money_money-remove,',
        'yobi_money_moneys,',
        'yobi_money_money-send,',
        'yobi_money_money-tick,',
        'yobi_money_money-time,',
        'yobi_money_percentage-square,',
        'yobi_money_receipt,',
        'yobi_money_receipt-2,',
        'yobi_money_receipt-3,',
        'yobi_money_receipt-4,',
        'yobi_money_receipt-add,',
        'yobi_money_receipt-discount,',
        'yobi_money_receipt-disscount,',
        'yobi_money_receipt-edit,',
        'yobi_money_receipt-item,',
        'yobi_money_receipt-minus,',
        'yobi_money_receipt-search,',
        'yobi_money_receipt-text,',
        'yobi_money_security-card,',
        'yobi_money_strongbox,',
        'yobi_money_strongbox-2,',
        'yobi_money_tag,',
        'yobi_money_tag-2,',
        'yobi_money_ticket,',
        'yobi_money_ticket-2,',
        'yobi_money_ticket-discount,',
        'yobi_money_ticket-expired,',
        'yobi_money_ticket-star,',
        'yobi_money_transaction-minus,',
        'yobi_money_wallet,',
        'yobi_money_wallet-2,',
        'yobi_money_wallet-3,',
        'yobi_money_wallet-4,',
        'yobi_money_wallet-add,',
        'yobi_money_wallet-add-2,',
        'yobi_money_wallet-check,',
        'yobi_money_wallet-minus,',
        'yobi_money_wallet-money,',
        'yobi_money_wallet-remove,',
        'yobi_money_wallet-search,',
        'yobi_move_arrange-circle,',
        'yobi_move_arrange-circle-2,',
        'yobi_move_arrange-square,',
        'yobi_move_arrange-square-2,',
        'yobi_move_arrow-2,',
        'yobi_move_arrow-3,',
        'yobi_move_arrow-circle-down,',
        'yobi_move_arrow-circle-left,',
        'yobi_move_arrow-circle-right,',
        'yobi_move_arrow-down,',
        'yobi_move_arrow-down-2,',
        'yobi_move_arrow-down-3,',
        'yobi_move_arrow-down-4,',
        'yobi_move_arrow-left,',
        'yobi_move_arrow-left-2,',
        'yobi_move_arrow-left-3,',
        'yobi_move_arrow-left-4,',
        'yobi_move_arrow-right,',
        'yobi_move_arrow-right-2,',
        'yobi_move_arrow-right-3,',
        'yobi_move_arrow-right-4,',
        'yobi_move_arrow-square-down,',
        'yobi_move_arrow-square-left,',
        'yobi_move_arrow-square-right,',
        'yobi_move_arrow-square-up,',
        'yobi_move_arrow-swap-horizontal,',
        'yobi_move_arrow-up,',
        'yobi_move_arrow-up-2,',
        'yobi_move_arrow-up-3,',
        'yobi_move_arrow-up-4,',
        'yobi_move_back-square,',
        'yobi_move_convert,',
        'yobi_move_export,',
        'yobi_move_export-2,',
        'yobi_move_export-3,',
        'yobi_move_export-4,',
        'yobi_move_forward-square,',
        'yobi_move_frame,',
        'yobi_move_frame-2,',
        'yobi_move_frame-3,',
        'yobi_move_import,',
        'yobi_move_import-2,',
        'yobi_move_import-3,',
        'yobi_move_login,',
        'yobi_move_login-2,',
        'yobi_move_logout,',
        'yobi_move_logout-2,',
        'yobi_move_received,',
        'yobi_move_receive-square,',
        'yobi_move_receive-square-2,',
        'yobi_move_redo,',
        'yobi_move_refresh,',
        'yobi_move_refresh-2,',
        'yobi_move_refresh-circle,',
        'yobi_move_refresh-left-square,',
        'yobi_move_refresh-right-square,',
        'yobi_move_refresh-square-2,',
        'yobi_move_repeat,',
        'yobi_move_repeat-circle,',
        'yobi_move_rotate-left,',
        'yobi_move_rotate-right,',
        'yobi_move_send,',
        'yobi_move_send-sqaure-2,',
        'yobi_move_send-square,',
        'yobi_move_undo,',
        'yobi_notification_bell,',
        'yobi_notification_bell-bing,',
        'yobi_notification_lamp-charge,',
        'yobi_notification_lamp-on,',
        'yobi_notification_lamp-slash,',
        'yobi_notification_notification,',
        'yobi_notification_notification-circle,',
        'yobi_notification_notification-favorite,',
        'yobi_notification_notification-status,',
        'yobi_programing_code,',
        'yobi_programing_code-2,',
        'yobi_programing_code-circle,',
        'yobi_programing_command,',
        'yobi_programing_command-square,',
        'yobi_programing_data,',
        'yobi_programing_data-2,',
        'yobi_programing_document-code,',
        'yobi_programing_document-code-2,',
        'yobi_programing_hashtag,',
        'yobi_programing_hashtag-down,',
        'yobi_programing_hashtag-up,',
        'yobi_programing_hierarchy,',
        'yobi_programing_hierarchy-2,',
        'yobi_programing_hierarchy-3,',
        'yobi_programing_hierarchy-square,',
        'yobi_programing_hierarchy-square-2,',
        'yobi_programing_hierarchy-square-3,',
        'yobi_programing_message-programming,',
        'yobi_programing_mobile-programming,',
        'yobi_programing_programming-arrow,',
        'yobi_programing_programming-arrows,',
        'yobi_programing_scroll,',
        'yobi_programing_sidebar-bottom,',
        'yobi_programing_sidebar-left,',
        'yobi_programing_sidebar-right,',
        'yobi_programing_sidebar-top,',
        'yobi_search_favorite,',
        'yobi_search_favorite-2,',
        'yobi_search_normal,',
        'yobi_search_normal-2,',
        'yobi_search_status,',
        'yobi_search_status-2,',
        'yobi_search_zoom-in,',
        'yobi_search_zoom-in-2,',
        'yobi_search_zoom-out,',
        'yobi_search_zoom-out-2,',
        'yobi_security_alarm,',
        'yobi_security_check,',
        'yobi_security_eye,',
        'yobi_security_eye-slash,',
        'yobi_security_finger-cricle,',
        'yobi_security_finger-scan,',
        'yobi_security_key,',
        'yobi_security_key-square,',
        'yobi_security_lock,',
        'yobi_security_lock-2,',
        'yobi_security_lock-circle,',
        'yobi_security_lock-slash,',
        'yobi_security_password-check,',
        'yobi_security_radar,',
        'yobi_security_scan,',
        'yobi_security_scan-barcode,',
        'yobi_security_scanner,',
        'yobi_security_scanning,',
        'yobi_security_security,',
        'yobi_security_security-safe,',
        'yobi_security_security-user,',
        'yobi_security_shield,',
        'yobi_security_shield-cross,',
        'yobi_security_shield-search,',
        'yobi_security_shield-security,',
        'yobi_security_shield-slash,',
        'yobi_security_shield-tick,',
        'yobi_security_unlock,',
        'yobi_settings_candle,',
        'yobi_settings_candle-2,',
        'yobi_settings_category,',
        'yobi_settings_category-2,',
        'yobi_settings_menu,',
        'yobi_settings_more,',
        'yobi_settings_more-2,',
        'yobi_settings_setting,',
        'yobi_settings_setting-2,',
        'yobi_settings_setting-3,',
        'yobi_settings_setting-4,',
        'yobi_settings_setting-5,',
        'yobi_settings_settings,',
        'yobi_settings_toggle-off,',
        'yobi_settings_toggle-off-circle,',
        'yobi_settings_toggle-on,',
        'yobi_settings_toggle-on-circle,',
        'yobi_shop_bag,',
        'yobi_shop_bag-2,',
        'yobi_shop_bag-cross,',
        'yobi_shop_bag-cross-2,',
        'yobi_shop_bag-happy,',
        'yobi_shop_bag-tick,',
        'yobi_shop_bag-tick-2,',
        'yobi_shop_bag-timer,',
        'yobi_shop_barcode,',
        'yobi_shop_shop,',
        'yobi_shop_shop-add,',
        'yobi_shop_shopping-bag,',
        'yobi_shop_shopping-cart,',
        'yobi_shop_shop-remove,',
        'yobi_social_24-support,',
        'yobi_social_dislike,',
        'yobi_social_heart,',
        'yobi_social_heart-add,',
        'yobi_social_heart-circle,',
        'yobi_social_heart-edit,',
        'yobi_social_heart-remove,',
        'yobi_social_heart-search,',
        'yobi_social_heart-slash,',
        'yobi_social_heart-tick,',
        'yobi_social_like,',
        'yobi_social_like-dislike,',
        'yobi_social_likes,',
        'yobi_social_like-shapes,',
        'yobi_social_like-tag,',
        'yobi_social_lovely,',
        'yobi_social_magic-star,',
        'yobi_social_medal,',
        'yobi_social_medal-star,',
        'yobi_social_message-question,',
        'yobi_social_ranking,',
        'yobi_social_smileys,',
        'yobi_social_star,',
        'yobi_social_stars,',
        'yobi_social_star-slash,',
        'yobi_social_unlimited,',
        'yobi_text_attach-circle,',
        'yobi_text_attach-square,',
        'yobi_text_eraser,',
        'yobi_text_firstline,',
        'yobi_text_language-circle,',
        'yobi_text_language-square,',
        'yobi_text_link,',
        'yobi_text_link-2,',
        'yobi_text_link-3,',
        'yobi_text_link-4,',
        'yobi_text_link-circle,',
        'yobi_text_link-square,',
        'yobi_text_maximize,',
        'yobi_text_paperclip,',
        'yobi_text_paperclip-2,',
        'yobi_text_pharagraphspacing,',
        'yobi_text_quote-down,',
        'yobi_text_quote-down-circle,',
        'yobi_text_quote-down-square,',
        'yobi_text_quote-up,',
        'yobi_text_quote-up-circle,',
        'yobi_text_quote-up-square,',
        'yobi_text_smallcaps,',
        'yobi_text_text,',
        'yobi_text_textalign-center,',
        'yobi_text_textalign-justifycenter,',
        'yobi_text_textalign-justifyleft,',
        'yobi_text_textalign-justifyright,',
        'yobi_text_textalign-left,',
        'yobi_text_textalign-right,',
        'yobi_text_text-block,',
        'yobi_text_text-bold,',
        'yobi_text_text-italic,',
        'yobi_text_text-underline,',
        'yobi_text_translate,',
        'yobi_time_calendar,',
        'yobi_time_calendar-2,',
        'yobi_time_calendar-add,',
        'yobi_time_calendar-circle,',
        'yobi_time_calendar-edit,',
        'yobi_time_calendar-remove,',
        'yobi_time_calendar-search,',
        'yobi_time_calendar-tick,',
        'yobi_time_clock,',
        'yobi_time_security-time,',
        'yobi_time_time,',
        'yobi_time_timer,',
        'yobi_time_timer-pause,',
        'yobi_time_timer-start,',
        'yobi_user_people,',
        'yobi_user_profile,',
        'yobi_user_profile-2user,',
        'yobi_user_profile-add,',
        'yobi_user_profile-circle,',
        'yobi_user_profile-delete,',
        'yobi_user_profile-remove,',
        'yobi_user_profile-tick,',
        'yobi_user_tag-user,',
        'yobi_user_user,',
        'yobi_user_user-add,',
        'yobi_user_user-cirlce-add,',
        'yobi_user_user-edit,',
        'yobi_user_user-minus,',
        'yobi_user_user-octagon,',
        'yobi_user_user-remove,',
        'yobi_user_user-search,',
        'yobi_user_user-square,',
        'yobi_user_user-tag,',
        'yobi_user_user-tick,',
        'yobi_weather_cloud,',
        'yobi_weather_cloud-cross,',
        'yobi_weather_cloud-drizzle,',
        'yobi_weather_cloud-fog,',
        'yobi_weather_cloud-lightning,',
        'yobi_weather_cloud-minus,',
        'yobi_weather_cloud-notif,',
        'yobi_weather_cloud-plus,',
        'yobi_weather_cloud-snow,',
        'yobi_weather_cloud-sunny,',
        'yobi_weather_drop,',
        'yobi_weather_flash,',
        'yobi_weather_moon,',
        'yobi_weather_sun,',
        'yobi_weather_sun-2,',
        'yobi_weather_sun-fog,',
        'yobi_weather_wind,',
        'yobi_weather_wind-2',
      ]
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::tag.tag'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
        minLength: 2;
      }>;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'name'> &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTeamTeam extends Struct.CollectionTypeSchema {
  collectionName: 'teams';
  info: {
    description: '';
    displayName: 'Team';
    pluralName: 'teams';
    singularName: 'team';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    advisor: Schema.Attribute.Boolean;
    bio: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::team.team'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'name'>;
    title: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    website: Schema.Attribute.String;
  };
}

export interface ApiTestimonialTestimonial extends Struct.CollectionTypeSchema {
  collectionName: 'testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
    pluralName: 'testimonials';
    singularName: 'testimonial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ai_agents: Schema.Attribute.Relation<
      'manyToMany',
      'api::ai-agent.ai-agent'
    >;
    case_studies: Schema.Attribute.Relation<
      'manyToMany',
      'api::case-study.case-study'
    >;
    company: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    excerpt: Schema.Attribute.Text;
    industries: Schema.Attribute.Relation<
      'manyToMany',
      'api::industry.industry'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiUseCaseUseCase extends Struct.CollectionTypeSchema {
  collectionName: 'use_cases';
  info: {
    description: '';
    displayName: 'Use Case';
    pluralName: 'use-cases';
    singularName: 'use-case';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ai_agents: Schema.Attribute.Relation<
      'manyToMany',
      'api::ai-agent.ai-agent'
    >;
    content: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    excerpt: Schema.Attribute.Text;
    faq: Schema.Attribute.Component<'shared.faq', true>;
    featuredIcon: Schema.Attribute.Enumeration<
      [
        'yobi_a_space',
        'yobi_archive_archive-add',
        'yobi_archive_archive-minus',
        'yobi_archive_archive-slash',
        'yobi_archive_archive-tick',
        'yobi_archive_book-saved',
        'yobi_archive_book-square',
        'yobi_archive_frame',
        'yobi_archive_receipt-square',
        'yobi_archive_save-2',
        'yobi_archive_save-add',
        'yobi_archive_save-minus',
        'yobi_archive_save-remove',
        'yobi_art_additem',
        'yobi_art_backward-item',
        'yobi_art_bezier',
        'yobi_art_blend',
        'yobi_art_blend-2',
        'yobi_art_blur',
        'yobi_art_brush',
        'yobi_art_brush-2',
        'yobi_art_brush-3',
        'yobi_art_brush-4',
        'yobi_art_bucket-circle',
        'yobi_art_bucket-square',
        'yobi_art_colorfilter',
        'yobi_art_colors-square',
        'yobi_art_color-swatch',
        'yobi_art_component',
        'yobi_art_copy',
        'yobi_art_copy-success',
        'yobi_art_designtools',
        'yobi_art_eraser',
        'yobi_art_flash-circle',
        'yobi_art_forward-item',
        'yobi_art_glass',
        'yobi_art_group',
        'yobi_art_group-2',
        'yobi_art_layer',
        'yobi_art_lifebuoy',
        'yobi_art_magicpen',
        'yobi_art_main-component',
        'yobi_art_mask',
        'yobi_art_mask-2',
        'yobi_art_mask-3',
        'yobi_art_omega-circle',
        'yobi_art_omega-square',
        'yobi_art_paintbucket',
        'yobi_art_path',
        'yobi_art_path-2',
        'yobi_art_path-square',
        'yobi_art_pen-add',
        'yobi_art_pen-close',
        'yobi_art_pen-remove',
        'yobi_art_pen-tool',
        'yobi_art_pen-tool-2',
        'yobi_art_recovery-convert',
        'yobi_art_rulerpen',
        'yobi_art_ruler',
        'yobi_art_scissor',
        'yobi_art_shapes',
        'yobi_art_shapes-2',
        'yobi_art_size',
        'yobi_biz_activity',
        'yobi_biz_chart',
        'yobi_biz_chart-2',
        'yobi_biz_chart-3',
        'yobi_biz_chart-4',
        'yobi_biz_chart-success',
        'yobi_biz_diagram',
        'yobi_biz_favorite-chart',
        'yobi_biz_frame',
        'yobi_biz_graph',
        'yobi_biz_hashtag',
        'yobi_biz_health',
        'yobi_biz_home-hashtag',
        'yobi_biz_home-trend-down',
        'yobi_biz_home-trend-up',
        'yobi_biz_personalcard',
        'yobi_biz_presention-chart',
        'yobi_biz_status-up',
        'yobi_biz_trend-down',
        'yobi_biz_trend-up',
        'yobi_building_bank',
        'yobi_building_building-2',
        'yobi_building_building-3',
        'yobi_building_building-4',
        'yobi_building_buildings',
        'yobi_building_buliding',
        'yobi_building_courthouse',
        'yobi_building_default',
        'yobi_building_hospital',
        'yobi_building_house',
        'yobi_building_house-2',
        'yobi_call',
        'yobi_call_add',
        'yobi_call_calling',
        'yobi_call_incoming',
        'yobi_call_minus',
        'yobi_call_outgoing',
        'yobi_call_received',
        'yobi_call_remove',
        'yobi_call_slash',
        'yobi_car_airplane',
        'yobi_car_airplane-square',
        'yobi_car_bus',
        'yobi_car_car',
        'yobi_car_driving',
        'yobi_car_gas-station',
        'yobi_car_ship',
        'yobi_car_smart-car',
        'yobi_chat_device-message',
        'yobi_chat_direct',
        'yobi_chat_directbox-default',
        'yobi_chat_directbox-notif',
        'yobi_chat_directbox-receive',
        'yobi_chat_directbox-send',
        'yobi_chat_direct-inbox',
        'yobi_chat_direct-normal',
        'yobi_chat_direct-notification',
        'yobi_chat_direct-send',
        'yobi_chat_message',
        'yobi_chat_message-2',
        'yobi_chat_message-add',
        'yobi_chat_message-add-2',
        'yobi_chat_message-circle',
        'yobi_chat_message-edit',
        'yobi_chat_message-favorite',
        'yobi_chat_message-minus',
        'yobi_chat_message-notif',
        'yobi_chat_message-remove',
        'yobi_chat_messages',
        'yobi_chat_messages-2',
        'yobi_chat_messages-3',
        'yobi_chat_messages-4',
        'yobi_chat_message-search',
        'yobi_chat_message-square',
        'yobi_chat_message-text',
        'yobi_chat_message-text-2',
        'yobi_chat_message-tick',
        'yobi_chat_message-time',
        'yobi_chat_sms',
        'yobi_chat_sms-edit',
        'yobi_chat_sms-notification',
        'yobi_chat_sms-search',
        'yobi_chat_sms-star',
        'yobi_chat_sms-tracking',
        'yobi_content_archive-book',
        'yobi_content_bill',
        'yobi_content_clipboard-close',
        'yobi_content_clipboard-export',
        'yobi_content_clipboard-import',
        'yobi_content_clipboard-text',
        'yobi_content_clipboard-tick',
        'yobi_content_copyright',
        'yobi_content_creative-commons',
        'yobi_content_document',
        'yobi_content_document-cloud',
        'yobi_content_document-copy',
        'yobi_content_document-download',
        'yobi_content_document-favorite',
        'yobi_content_document-filter',
        'yobi_content_document-forward',
        'yobi_content_document-like',
        'yobi_content_document-normal',
        'yobi_content_document-previous',
        'yobi_content_document-sketch',
        'yobi_content_document-text',
        'yobi_content_document-text-2',
        'yobi_content_document-upload',
        'yobi_content_edit',
        'yobi_content_edit-2',
        'yobi_content_menu-board',
        'yobi_content_note',
        'yobi_content_note-2',
        'yobi_content_note-add',
        'yobi_content_note-favorite',
        'yobi_content_note-remove',
        'yobi_content_note-text',
        'yobi_content_stickynote',
        'yobi_content_task',
        'yobi_content_task-square',
        'yobi_crypto_bitcoin-card',
        'yobi_crypto_bitcoin-convert',
        'yobi_crypto_bitcoin-refresh',
        'yobi_crypto_buy-crypto',
        'yobi_crypto_card-coin',
        'yobi_crypto_trade',
        'yobi_delivery_3d-cube-scan',
        'yobi_delivery_3d-rotate',
        'yobi_delivery_3d-square',
        'yobi_delivery_box',
        'yobi_delivery_box-2',
        'yobi_delivery_box-add',
        'yobi_delivery_box-remove',
        'yobi_delivery_box-search',
        'yobi_delivery_box-tick',
        'yobi_delivery_box-time',
        'yobi_delivery_convert-3d-cube',
        'yobi_delivery_group',
        'yobi_delivery_groups',
        'yobi_delivery_truck-remove',
        'yobi_delivery_truck-tick',
        'yobi_delivery_truck-time',
        'yobi_folder_2',
        'yobi_folder_add',
        'yobi_folder_cloud',
        'yobi_folder_cross',
        'yobi_folder_favorite',
        'yobi_folder_folder',
        'yobi_folder_minus',
        'yobi_folder_open',
        'yobi_grid_3square',
        'yobi_grid_align-bottom',
        'yobi_grid_align-horizontally',
        'yobi_grid_align-left',
        'yobi_grid_align-right',
        'yobi_grid_align-vertically',
        'yobi_grid_convertshape',
        'yobi_grid_convertshape-2',
        'yobi_grid_crop',
        'yobi_grid_element-1',
        'yobi_grid_element-2',
        'yobi_grid_element-3',
        'yobi_grid_element-4',
        'yobi_grid_element-equal',
        'yobi_grid_element-plus',
        'yobi_grid_fatrows',
        'yobi_grid_format-circle',
        'yobi_grid_format-square',
        'yobi_grid_frame',
        'yobi_grid_grid-1',
        'yobi_grid_grid-2',
        'yobi_grid_grid-3',
        'yobi_grid_grid-4',
        'yobi_grid_grid-5',
        'yobi_grid_grid-6',
        'yobi_grid_grid-7',
        'yobi_grid_grid-8',
        'yobi_grid_grid-9',
        'yobi_grid_grid-edit',
        'yobi_grid_grid-eraser',
        'yobi_grid_grid-lock',
        'yobi_grid_kanban',
        'yobi_grid_maximize',
        'yobi_grid_maximize-2',
        'yobi_grid_maximize-3',
        'yobi_grid_maximize-4',
        'yobi_grid_maximize-5',
        'yobi_grid_rotate-left',
        'yobi_grid_rotate-right',
        'yobi_grid_row-horizontal',
        'yobi_grid_row-vertical',
        'yobi_grid_slider-horizontal',
        'yobi_grid_slider-horizontal-2',
        'yobi_grid_slider-vertical',
        'yobi_grid_slider-vertical-2',
        'yobi_hardware_airdrop',
        'yobi_hardware_airpod',
        'yobi_hardware_airpods',
        'yobi_hardware_bluetooth',
        'yobi_hardware_bluetooth-2',
        'yobi_hardware_bluetooth-circle',
        'yobi_hardware_bluetooth-rectangle',
        'yobi_hardware_clock',
        'yobi_hardware_cloud-add',
        'yobi_hardware_cloud-change',
        'yobi_hardware_cloud-connection',
        'yobi_hardware_cloud-remove',
        'yobi_hardware_cpu',
        'yobi_hardware_cpu-charge',
        'yobi_hardware_cpu-setting',
        'yobi_hardware_devices',
        'yobi_hardware_driver',
        'yobi_hardware_driver-2',
        'yobi_hardware_driver-refresh',
        'yobi_hardware_electricity',
        'yobi_hardware_external-drive',
        'yobi_hardware_folder-connection',
        'yobi_hardware_game',
        'yobi_hardware_gameboy',
        'yobi_hardware_headphone',
        'yobi_hardware_headphones',
        'yobi_hardware_keyboard',
        'yobi_hardware_keyboard-open',
        'yobi_hardware_lamp',
        'yobi_hardware_microscope',
        'yobi_hardware_mirroring-screen',
        'yobi_hardware_monitor',
        'yobi_hardware_monitor-mobbile',
        'yobi_hardware_monitor-recorder',
        'yobi_hardware_mouse',
        'yobi_hardware_music-play',
        'yobi_hardware_printer',
        'yobi_hardware_printer-slash',
        'yobi_hardware_ram',
        'yobi_hardware_ram-2',
        'yobi_hardware_simcard',
        'yobi_hardware_simcard-2',
        'yobi_hardware_simcard-3',
        'yobi_hardware_speaker',
        'yobi_hardware_watch',
        'yobi_hardware_watch-status',
        'yobi_hardware_weight',
        'yobi_hardware-mobile',
        'yobi_huh_aquarius',
        'yobi_huh_gemini',
        'yobi_huh_gemini-2',
        'yobi_huh_man',
        'yobi_huh_sagittarius',
        'yobi_huh_woman',
        'yobi_learn_award',
        'yobi_learn_book',
        'yobi_learn_book-2',
        'yobi_learn_bookmark',
        'yobi_learn_bookmark-2',
        'yobi_learn_briefcase',
        'yobi_learn_brifecase-cross',
        'yobi_learn_brifecase-tick',
        'yobi_learn_brifecase-timer',
        'yobi_learn_calculator',
        'yobi_learn_clipboard',
        'yobi_learn_gift',
        'yobi_learn_note',
        'yobi_learn_note-2',
        'yobi_learn_teacher',
        'yobi_logo_aave-aave',
        'yobi_logo_android',
        'yobi_logo_ankr-ankr',
        'yobi_logo_apple',
        'yobi_logo_augur-rep',
        'yobi_logo_autonio-niox',
        'yobi_logo_avalanche-avax',
        'yobi_logo_be',
        'yobi_logo_binance-coin-bnb',
        'yobi_logo_binance-usd-busd',
        'yobi_logo_bitcoin-btc',
        'yobi_logo_blogger',
        'yobi_logo_bootsrap',
        'yobi_logo_cardano-ada',
        'yobi_logo_celo-celo',
        'yobi_logo_celsius-cel',
        'yobi_logo_chainlink-link',
        'yobi_logo_civic-cvc',
        'yobi_logo_dai-dai',
        'yobi_logo_dash-dash',
        'yobi_logo_decred-dcr',
        'yobi_logo_dent-dent',
        'yobi_logo_dropbox',
        'yobi_logo_educare-ekt',
        'yobi_logo_emercoin-emc',
        'yobi_logo_enjin-coin-enj',
        'yobi_logo_eos-eos',
        'yobi_logo_ethereum-eth',
        'yobi_logo_ethereum-classic-etc',
        'yobi_logo_facebook',
        'yobi_logo_figma',
        'yobi_logo_figma-2',
        'yobi_logo_frame',
        'yobi_logo_frame-2',
        'yobi_logo_framer',
        'yobi_logo_ftx-token-ftt',
        'yobi_logo_google',
        'yobi_logo_google-2',
        'yobi_logo_google-play',
        'yobi_logo_harmony-one',
        'yobi_logo_hedera-hashgraph-hbar',
        'yobi_logo_hex-hex',
        'yobi_logo_html-3',
        'yobi_logo_html-5',
        'yobi_logo_huobi-token-ht',
        'yobi_logo_icon-icx',
        'yobi_logo_illustrator',
        'yobi_logo_iost-iost',
        'yobi_logo_java-script',
        'yobi_logo_js',
        'yobi_logo_kyber-network-knc',
        'yobi_logo_litecoinltc',
        'yobi_logo_maker-mkr',
        'yobi_logo_messenger',
        'yobi_logo_monero-xmr',
        'yobi_logo_nebulas-nas',
        'yobi_logo_nem-xem',
        'yobi_logo_ocean-protocol-ocean',
        'yobi_logo_okb-okb',
        'yobi_logo_ontology-ont',
        'yobi_logo_paypal',
        'yobi_logo_photoshop',
        'yobi_logo_polkadot-dot',
        'yobi_logo_polygon-matic',
        'yobi_logo_python',
        'yobi_logo_quant-qnt',
        'yobi_logo_siacoin-sc',
        'yobi_logo_slack',
        'yobi_logo_snapchat',
        'yobi_logo_solana-sol',
        'yobi_logo_spotify',
        'yobi_logo_stacks-stx',
        'yobi_logo_stellar-xlm',
        'yobi_logo_tenx-pay',
        'yobi_logo_tether-usdt',
        'yobi_logo_the-graph-grt',
        'yobi_logo_theta-theta',
        'yobi_logo_thorchain-rune',
        'yobi_logo_trello',
        'yobi_logo_triangle',
        'yobi_logo_trontron-trx',
        'yobi_logo_twitch',
        'yobi_logo_usd-coin-usdc',
        'yobi_logo_velas-vlx',
        'yobi_logo_vibe-vibe',
        'yobi_logo_wanchain-wan',
        'yobi_logo_wanchain-wan-2',
        'yobi_logo_whatsapp',
        'yobi_logo_windows',
        'yobi_logo_wing-wing',
        'yobi_logo_xd',
        'yobi_logo_xiaomi',
        'yobi_logo_xrp-xrp',
        'yobi_logo_youtube',
        'yobi_logo_zel-zel',
        'yobi_logo_zoom',
        'yobi_map_arrow',
        'yobi_map_arrow-square',
        'yobi_map_direct-down',
        'yobi_map_direct-left',
        'yobi_map_direct-right',
        'yobi_map_direct-up',
        'yobi_map_discover',
        'yobi_map_global',
        'yobi_map_global-edit',
        'yobi_map_global-refresh',
        'yobi_map_global-search',
        'yobi_map_gps',
        'yobi_map_gps-slash',
        'yobi_map_location',
        'yobi_map_location-add',
        'yobi_map_location-cross',
        'yobi_map_location-minus',
        'yobi_map_location-slash',
        'yobi_map_location-tick',
        'yobi_map_map',
        'yobi_map_map-2',
        'yobi_map_picture-frame',
        'yobi_map_radar',
        'yobi_map_radar-2',
        'yobi_map_route-square',
        'yobi_map_routing',
        'yobi_map_routing-2',
        'yobi_media_audio-square',
        'yobi_media_backward',
        'yobi_media_backward-5-seconds',
        'yobi_media_backward-10-seconds',
        'yobi_media_backward-15-seconds',
        'yobi_media_camera',
        'yobi_media_camera-slash',
        'yobi_media_devices',
        'yobi_media_forward',
        'yobi_media_forward-5-seconds',
        'yobi_media_forward-10-seconds',
        'yobi_media_forward-15-seconds',
        'yobi_media_gallery',
        'yobi_media_gallery-add',
        'yobi_media_gallery-edit',
        'yobi_media_gallery-export',
        'yobi_media_gallery-favorite',
        'yobi_media_gallery-import',
        'yobi_media_gallery-remove',
        'yobi_media_gallery-slash',
        'yobi_media_gallery-tick',
        'yobi_media_group',
        'yobi_media_image',
        'yobi_media_maximize-circle',
        'yobi_media_microphone',
        'yobi_media_microphone-2',
        'yobi_media_microphone-slash',
        'yobi_media_microphone-slash-2',
        'yobi_media_mini-music-sqaure',
        'yobi_media_music',
        'yobi_media_music-circle',
        'yobi_media_music-dashboard',
        'yobi_media_music-filter',
        'yobi_media_music-library-2',
        'yobi_media_musicnote',
        'yobi_media_music-playlist',
        'yobi_media_music-square',
        'yobi_media_music-square-add',
        'yobi_media_music-square-remove',
        'yobi_media_music-square-search',
        'yobi_media_next',
        'yobi_media_note-square',
        'yobi_media_pause',
        'yobi_media_pause-circle',
        'yobi_media_play',
        'yobi_media_play-add',
        'yobi_media_play-circle',
        'yobi_media_play-cricle',
        'yobi_media_play-remove',
        'yobi_media_previous',
        'yobi_media_radio',
        'yobi_media_record',
        'yobi_media_record-circle',
        'yobi_media_repeate-music',
        'yobi_media_repeate-one',
        'yobi_media_scissor',
        'yobi_media_screenmirroring',
        'yobi_media_stop',
        'yobi_media_stop-circle',
        'yobi_media_subtitle',
        'yobi_media_video',
        'yobi_media_video-add',
        'yobi_media_video-circle',
        'yobi_media_video-horizontal',
        'yobi_media_video-octagon',
        'yobi_media_video-play',
        'yobi_media_video-remove',
        'yobi_media_video-slash',
        'yobi_media_video-square',
        'yobi_media_video-tick',
        'yobi_media_video-time',
        'yobi_media_video-vertical',
        'yobi_media_voice-cricle',
        'yobi_media_voice-square',
        'yobi_media_volume-cross',
        'yobi_media_volume-high',
        'yobi_media_volume-low',
        'yobi_media_volume-low-2',
        'yobi_media_volume-mute',
        'yobi_media_volume-slash',
        'yobi_media_volume-up',
        'yobi_misc_3dcube',
        'yobi_misc_add',
        'yobi_misc_add-circle',
        'yobi_misc_add-square',
        'yobi_misc_archive',
        'yobi_misc_autobrightness',
        'yobi_misc_battery-2full',
        'yobi_misc_battery-charging',
        'yobi_misc_battery-disable',
        'yobi_misc_battery-empty',
        'yobi_misc_battery-empty-2',
        'yobi_misc_battery-full',
        'yobi_misc_box-2',
        'yobi_misc_broom',
        'yobi_misc_bubble',
        'yobi_misc_cake',
        'yobi_misc_cd',
        'yobi_misc_chart',
        'yobi_misc_chrome',
        'yobi_misc_close-circle',
        'yobi_misc_close-square',
        'yobi_misc_coffee',
        'yobi_misc_computing',
        'yobi_misc_crown',
        'yobi_misc_crown-2',
        'yobi_misc_cup',
        'yobi_misc_danger',
        'yobi_misc_diamonds',
        'yobi_misc_discover',
        'yobi_misc_emoji-happy',
        'yobi_misc_emoji-normal',
        'yobi_misc_emoji-sad',
        'yobi_misc_filter',
        'yobi_misc_filter-add',
        'yobi_misc_filter-edit',
        'yobi_misc_filter-remove',
        'yobi_misc_filter-search',
        'yobi_misc_filter-square',
        'yobi_misc_filter-tick',
        'yobi_misc_flag',
        'yobi_misc_flag-2',
        'yobi_misc_flash',
        'yobi_misc_flash-circle',
        'yobi_misc_flash-slash',
        'yobi_misc_ghost',
        'yobi_misc_glass',
        'yobi_misc_grammerly',
        'yobi_misc_happyemoji',
        'yobi_misc_home',
        'yobi_misc_home-2',
        'yobi_misc_home-3',
        'yobi_misc_home-wifi',
        'yobi_misc_info-circle',
        'yobi_misc_information',
        'yobi_misc_instagram',
        'yobi_misc_judge',
        'yobi_misc_lamp',
        'yobi_misc_level',
        'yobi_misc_menu',
        'yobi_misc_milk',
        'yobi_misc_minus',
        'yobi_misc_minus-cirlce',
        'yobi_misc_minus-square',
        'yobi_misc_mirror',
        'yobi_misc_more-circle',
        'yobi_misc_more-square',
        'yobi_misc_mouse',
        'yobi_misc_mouse-circle',
        'yobi_misc_mouse-square',
        'yobi_misc_no',
        'yobi_misc_no-2',
        'yobi_misc_pet',
        'yobi_misc_ranking',
        'yobi_misc_reserve',
        'yobi_misc_safe-home',
        'yobi_misc_send',
        'yobi_misc_send-2',
        'yobi_misc_share',
        'yobi_misc_signpost',
        'yobi_misc_slash',
        'yobi_misc_slider',
        'yobi_misc_smart-home',
        'yobi_misc_sort',
        'yobi_misc_sound',
        'yobi_misc_speedometer',
        'yobi_misc_status',
        'yobi_misc_sticker',
        'yobi_misc_story',
        'yobi_misc_tag-cross',
        'yobi_misc_tag-right',
        'yobi_misc_tick-circle',
        'yobi_misc_tick-square',
        'yobi_misc_trash',
        'yobi_misc_tree',
        'yobi_misc_triangle',
        'yobi_misc_trush-square',
        'yobi_misc_verify',
        'yobi_misc_warning-2',
        'yobi_misc_weight',
        'yobi_misc_wifi',
        'yobi_misc_wifi-square',
        'yobi_money_archive',
        'yobi_money_card',
        'yobi_money_card-add',
        'yobi_money_card-edit',
        'yobi_money_card-pos',
        'yobi_money_card-receive',
        'yobi_money_card-remove',
        'yobi_money_card-remove-2',
        'yobi_money_cards',
        'yobi_money_card-send',
        'yobi_money_card-slash',
        'yobi_money_card-tick',
        'yobi_money_card-tick-2',
        'yobi_money_chart-square',
        'yobi_money_coin',
        'yobi_money_coin-2',
        'yobi_money_discount-circle',
        'yobi_money_discount-shape',
        'yobi_money_document',
        'yobi_money_dollar-circle',
        'yobi_money_dollar-square',
        'yobi_money_empty-wallet',
        'yobi_money_empty-wallet-add',
        'yobi_money_empty-wallet-change',
        'yobi_money_empty-wallet-remove',
        'yobi_money_empty-wallet-tick',
        'yobi_money_empty-wallet-time',
        'yobi_money_group',
        'yobi_money_group-2',
        'yobi_money_math',
        'yobi_money_money',
        'yobi_money_money-2',
        'yobi_money_money-3',
        'yobi_money_money-4',
        'yobi_money_money-add',
        'yobi_money_money-change',
        'yobi_money_money-forbidden',
        'yobi_money_money-recive',
        'yobi_money_money-remove',
        'yobi_money_moneys',
        'yobi_money_money-send',
        'yobi_money_money-tick',
        'yobi_money_money-time',
        'yobi_money_percentage-square',
        'yobi_money_receipt',
        'yobi_money_receipt-2',
        'yobi_money_receipt-3',
        'yobi_money_receipt-4',
        'yobi_money_receipt-add',
        'yobi_money_receipt-discount',
        'yobi_money_receipt-disscount',
        'yobi_money_receipt-edit',
        'yobi_money_receipt-item',
        'yobi_money_receipt-minus',
        'yobi_money_receipt-search',
        'yobi_money_receipt-text',
        'yobi_money_security-card',
        'yobi_money_strongbox',
        'yobi_money_strongbox-2',
        'yobi_money_tag',
        'yobi_money_tag-2',
        'yobi_money_ticket',
        'yobi_money_ticket-2',
        'yobi_money_ticket-discount',
        'yobi_money_ticket-expired',
        'yobi_money_ticket-star',
        'yobi_money_transaction-minus',
        'yobi_money_wallet',
        'yobi_money_wallet-2',
        'yobi_money_wallet-3',
        'yobi_money_wallet-4',
        'yobi_money_wallet-add',
        'yobi_money_wallet-add-2',
        'yobi_money_wallet-check',
        'yobi_money_wallet-minus',
        'yobi_money_wallet-money',
        'yobi_money_wallet-remove',
        'yobi_money_wallet-search',
        'yobi_move_arrange-circle',
        'yobi_move_arrange-circle-2',
        'yobi_move_arrange-square',
        'yobi_move_arrange-square-2',
        'yobi_move_arrow-2',
        'yobi_move_arrow-3',
        'yobi_move_arrow-circle-down',
        'yobi_move_arrow-circle-left',
        'yobi_move_arrow-circle-right',
        'yobi_move_arrow-down',
        'yobi_move_arrow-down-2',
        'yobi_move_arrow-down-3',
        'yobi_move_arrow-down-4',
        'yobi_move_arrow-left',
        'yobi_move_arrow-left-2',
        'yobi_move_arrow-left-3',
        'yobi_move_arrow-left-4',
        'yobi_move_arrow-right',
        'yobi_move_arrow-right-2',
        'yobi_move_arrow-right-3',
        'yobi_move_arrow-right-4',
        'yobi_move_arrow-square-down',
        'yobi_move_arrow-square-left',
        'yobi_move_arrow-square-right',
        'yobi_move_arrow-square-up',
        'yobi_move_arrow-swap-horizontal',
        'yobi_move_arrow-up',
        'yobi_move_arrow-up-2',
        'yobi_move_arrow-up-3',
        'yobi_move_arrow-up-4',
        'yobi_move_back-square',
        'yobi_move_convert',
        'yobi_move_export',
        'yobi_move_export-2',
        'yobi_move_export-3',
        'yobi_move_export-4',
        'yobi_move_forward-square',
        'yobi_move_frame',
        'yobi_move_frame-2',
        'yobi_move_frame-3',
        'yobi_move_import',
        'yobi_move_import-2',
        'yobi_move_import-3',
        'yobi_move_login',
        'yobi_move_login-2',
        'yobi_move_logout',
        'yobi_move_logout-2',
        'yobi_move_received',
        'yobi_move_receive-square',
        'yobi_move_receive-square-2',
        'yobi_move_redo',
        'yobi_move_refresh',
        'yobi_move_refresh-2',
        'yobi_move_refresh-circle',
        'yobi_move_refresh-left-square',
        'yobi_move_refresh-right-square',
        'yobi_move_refresh-square-2',
        'yobi_move_repeat',
        'yobi_move_repeat-circle',
        'yobi_move_rotate-left',
        'yobi_move_rotate-right',
        'yobi_move_send',
        'yobi_move_send-sqaure-2',
        'yobi_move_send-square',
        'yobi_move_undo',
        'yobi_notification_bell',
        'yobi_notification_bell-bing',
        'yobi_notification_lamp-charge',
        'yobi_notification_lamp-on',
        'yobi_notification_lamp-slash',
        'yobi_notification_notification',
        'yobi_notification_notification-circle',
        'yobi_notification_notification-favorite',
        'yobi_notification_notification-status',
        'yobi_programing_code',
        'yobi_programing_code-2',
        'yobi_programing_code-circle',
        'yobi_programing_command',
        'yobi_programing_command-square',
        'yobi_programing_data',
        'yobi_programing_data-2',
        'yobi_programing_document-code',
        'yobi_programing_document-code-2',
        'yobi_programing_hashtag',
        'yobi_programing_hashtag-down',
        'yobi_programing_hashtag-up',
        'yobi_programing_hierarchy',
        'yobi_programing_hierarchy-2',
        'yobi_programing_hierarchy-3',
        'yobi_programing_hierarchy-square',
        'yobi_programing_hierarchy-square-2',
        'yobi_programing_hierarchy-square-3',
        'yobi_programing_message-programming',
        'yobi_programing_mobile-programming',
        'yobi_programing_programming-arrow',
        'yobi_programing_programming-arrows',
        'yobi_programing_scroll',
        'yobi_programing_sidebar-bottom',
        'yobi_programing_sidebar-left',
        'yobi_programing_sidebar-right',
        'yobi_programing_sidebar-top',
        'yobi_search_favorite',
        'yobi_search_favorite-2',
        'yobi_search_normal',
        'yobi_search_normal-2',
        'yobi_search_status',
        'yobi_search_status-2',
        'yobi_search_zoom-in',
        'yobi_search_zoom-in-2',
        'yobi_search_zoom-out',
        'yobi_search_zoom-out-2',
        'yobi_security_alarm',
        'yobi_security_check',
        'yobi_security_eye',
        'yobi_security_eye-slash',
        'yobi_security_finger-cricle',
        'yobi_security_finger-scan',
        'yobi_security_key',
        'yobi_security_key-square',
        'yobi_security_lock',
        'yobi_security_lock-2',
        'yobi_security_lock-circle',
        'yobi_security_lock-slash',
        'yobi_security_password-check',
        'yobi_security_radar',
        'yobi_security_scan',
        'yobi_security_scan-barcode',
        'yobi_security_scanner',
        'yobi_security_scanning',
        'yobi_security_security',
        'yobi_security_security-safe',
        'yobi_security_security-user',
        'yobi_security_shield',
        'yobi_security_shield-cross',
        'yobi_security_shield-search',
        'yobi_security_shield-security',
        'yobi_security_shield-slash',
        'yobi_security_shield-tick',
        'yobi_security_unlock',
        'yobi_settings_candle',
        'yobi_settings_candle-2',
        'yobi_settings_category',
        'yobi_settings_category-2',
        'yobi_settings_menu',
        'yobi_settings_more',
        'yobi_settings_more-2',
        'yobi_settings_setting',
        'yobi_settings_setting-2',
        'yobi_settings_setting-3',
        'yobi_settings_setting-4',
        'yobi_settings_setting-5',
        'yobi_settings_settings',
        'yobi_settings_toggle-off',
        'yobi_settings_toggle-off-circle',
        'yobi_settings_toggle-on',
        'yobi_settings_toggle-on-circle',
        'yobi_shop_bag',
        'yobi_shop_bag-2',
        'yobi_shop_bag-cross',
        'yobi_shop_bag-cross-2',
        'yobi_shop_bag-happy',
        'yobi_shop_bag-tick',
        'yobi_shop_bag-tick-2',
        'yobi_shop_bag-timer',
        'yobi_shop_barcode',
        'yobi_shop_shop',
        'yobi_shop_shop-add',
        'yobi_shop_shopping-bag',
        'yobi_shop_shopping-cart',
        'yobi_shop_shop-remove',
        'yobi_social_24-support',
        'yobi_social_dislike',
        'yobi_social_heart',
        'yobi_social_heart-add',
        'yobi_social_heart-circle',
        'yobi_social_heart-edit',
        'yobi_social_heart-remove',
        'yobi_social_heart-search',
        'yobi_social_heart-slash',
        'yobi_social_heart-tick',
        'yobi_social_like',
        'yobi_social_like-dislike',
        'yobi_social_likes',
        'yobi_social_like-shapes',
        'yobi_social_like-tag',
        'yobi_social_lovely',
        'yobi_social_magic-star',
        'yobi_social_medal',
        'yobi_social_medal-star',
        'yobi_social_message-question',
        'yobi_social_ranking',
        'yobi_social_smileys',
        'yobi_social_star',
        'yobi_social_stars',
        'yobi_social_star-slash',
        'yobi_social_unlimited',
        'yobi_text_attach-circle',
        'yobi_text_attach-square',
        'yobi_text_eraser',
        'yobi_text_firstline',
        'yobi_text_language-circle',
        'yobi_text_language-square',
        'yobi_text_link',
        'yobi_text_link-2',
        'yobi_text_link-3',
        'yobi_text_link-4',
        'yobi_text_link-circle',
        'yobi_text_link-square',
        'yobi_text_maximize',
        'yobi_text_paperclip',
        'yobi_text_paperclip-2',
        'yobi_text_pharagraphspacing',
        'yobi_text_quote-down',
        'yobi_text_quote-down-circle',
        'yobi_text_quote-down-square',
        'yobi_text_quote-up',
        'yobi_text_quote-up-circle',
        'yobi_text_quote-up-square',
        'yobi_text_smallcaps',
        'yobi_text_text',
        'yobi_text_textalign-center',
        'yobi_text_textalign-justifycenter',
        'yobi_text_textalign-justifyleft',
        'yobi_text_textalign-justifyright',
        'yobi_text_textalign-left',
        'yobi_text_textalign-right',
        'yobi_text_text-block',
        'yobi_text_text-bold',
        'yobi_text_text-italic',
        'yobi_text_text-underline',
        'yobi_text_translate',
        'yobi_time_calendar',
        'yobi_time_calendar-2',
        'yobi_time_calendar-add',
        'yobi_time_calendar-circle',
        'yobi_time_calendar-edit',
        'yobi_time_calendar-remove',
        'yobi_time_calendar-search',
        'yobi_time_calendar-tick',
        'yobi_time_clock',
        'yobi_time_security-time',
        'yobi_time_time',
        'yobi_time_timer',
        'yobi_time_timer-pause',
        'yobi_time_timer-start',
        'yobi_user_people',
        'yobi_user_profile',
        'yobi_user_profile-2user',
        'yobi_user_profile-add',
        'yobi_user_profile-circle',
        'yobi_user_profile-delete',
        'yobi_user_profile-remove',
        'yobi_user_profile-tick',
        'yobi_user_tag-user',
        'yobi_user_user',
        'yobi_user_user-add',
        'yobi_user_user-cirlce-add',
        'yobi_user_user-edit',
        'yobi_user_user-minus',
        'yobi_user_user-octagon',
        'yobi_user_user-remove',
        'yobi_user_user-search',
        'yobi_user_user-square',
        'yobi_user_user-tag',
        'yobi_user_user-tick',
        'yobi_weather_cloud',
        'yobi_weather_cloud-cross',
        'yobi_weather_cloud-drizzle',
        'yobi_weather_cloud-fog',
        'yobi_weather_cloud-lightning',
        'yobi_weather_cloud-minus',
        'yobi_weather_cloud-notif',
        'yobi_weather_cloud-plus',
        'yobi_weather_cloud-snow',
        'yobi_weather_cloud-sunny',
        'yobi_weather_drop',
        'yobi_weather_flash',
        'yobi_weather_moon',
        'yobi_weather_sun',
        'yobi_weather_sun-2',
        'yobi_weather_sun-fog',
        'yobi_weather_wind',
        'yobi_weather_wind-2',
      ]
    >;
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    iconBox: Schema.Attribute.Component<'shared.icon-box', true>;
    imageCaption: Schema.Attribute.Component<'shared.image-caption', true>;
    industries: Schema.Attribute.Relation<
      'manyToMany',
      'api::industry.industry'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::use-case.use-case'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::ai-agent.ai-agent': ApiAiAgentAiAgent;
      'api::article.article': ApiArticleArticle;
      'api::blog.blog': ApiBlogBlog;
      'api::career.career': ApiCareerCareer;
      'api::case-study.case-study': ApiCaseStudyCaseStudy;
      'api::feature.feature': ApiFeatureFeature;
      'api::industry.industry': ApiIndustryIndustry;
      'api::integration.integration': ApiIntegrationIntegration;
      'api::press.press': ApiPressPress;
      'api::subfeature.subfeature': ApiSubfeatureSubfeature;
      'api::tag.tag': ApiTagTag;
      'api::team.team': ApiTeamTeam;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::use-case.use-case': ApiUseCaseUseCase;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
