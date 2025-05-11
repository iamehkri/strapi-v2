import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface SharedIconBox extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_boxes';
  info: {
    description: '';
    displayName: 'iconBox';
    icon: 'book';
  };
  attributes: {
    iconDescription: Schema.Attribute.Text;
    iconTitle: Schema.Attribute.String;
    svgicon: Schema.Attribute.Text &
      Schema.Attribute.CustomField<
        'plugin::icons-field.icon',
        {
          output: 'svg';
        }
      >;
  };
}

export interface SharedImageCaption extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_captions';
  info: {
    displayName: 'ImageCaption';
    icon: 'landscape';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedNextjsComp extends Struct.ComponentSchema {
  collectionName: 'components_shared_nextjs_comps';
  info: {
    displayName: 'nextjs-comp';
    icon: 'code';
  };
  attributes: {
    agent_id: Schema.Attribute.String;
    component_id: Schema.Attribute.String;
    form_id: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedPriceBox extends Struct.ComponentSchema {
  collectionName: 'components_shared_price_boxes';
  info: {
    displayName: 'priceBox';
    icon: 'hashtag';
  };
  attributes: {
    cost: Schema.Attribute.Integer;
    frequency: Schema.Attribute.Enumeration<['monthly', 'annual', 'one-time']>;
    point1: Schema.Attribute.String;
    point2: Schema.Attribute.String;
    point3: Schema.Attribute.String;
    point4: Schema.Attribute.String;
    point5: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata for pages and articles';
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    metaKeywords: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'index,follow'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    ogMeta: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedStatBox extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_boxes';
  info: {
    displayName: 'statBox';
    icon: 'bulletList';
  };
  attributes: {
    stat: Schema.Attribute.String;
    statDesc: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.faq': SharedFaq;
      'shared.icon-box': SharedIconBox;
      'shared.image-caption': SharedImageCaption;
      'shared.nextjs-comp': SharedNextjsComp;
      'shared.open-graph': SharedOpenGraph;
      'shared.price-box': SharedPriceBox;
      'shared.seo': SharedSeo;
      'shared.stat-box': SharedStatBox;
    }
  }
}
