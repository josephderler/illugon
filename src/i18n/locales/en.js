import { brand, company, contact, store } from '../../lib/siteConfig';

/**
 * Site content (the site is English-only).
 *
 * CONTENT RULE: every feature and safety claim comes from the Google Play
 * listing description or from the screenshots themselves. Do not add
 * unverifiable claims (awards, install counts, superlatives).
 *
 * LEGAL TEXTS are DRAFTS based on common practice and need review by a
 * qualified lawyer before going live. In particular the "no personal data is
 * collected" statement assumes the app bundles no analytics or crash-reporting
 * SDK — it must match your Google Play "Data safety" declaration exactly.
 */

const address = contact.addressLines.join(', ');

const en = {
  htmlLang: 'en',
  dir: 'ltr',

  nav: {
    ariaLabel: 'Main menu',
    mobileAriaLabel: 'Mobile menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    items: [
      { label: 'Games', href: '#oyunlar' },
      { label: 'FAQ', href: '#why-illogan' },
      { label: 'Download', href: '#indir' },
    ],
    action: { label: 'Get the App', href: '#indir' },
  },

  common: {
    skipToContent: 'Skip to content',
    homeAriaLabel: `${brand.name} home`,
    backToHome: 'Back to home',
    storeBadgeLabel: 'Get it on Google Play',
    lastUpdated: 'Last updated',
  },

  home: {
    title: `${brand.name} — Shapes, colors and numbers for kids`,
    description:
      `${brand.name} teaches shapes, colors, numbers and logic to children aged 2-5. ` +
      '100% ad-free, works offline. Teacher Approved on Google Play.',

    hero: {
      headline: { accent: 'Learn by Playing', rest: `with ${brand.name}` },
      subtext:
        'Shapes, colors, numbers and logic games in one app. Built for ages 2-5, completely ad-free and works without an internet connection.',
      tags: ['Shapes', 'Colors', 'Numbers', 'Logic'],
    },

    teacherApproved: {
      headline: { accent: 'Teacher Approved', rest: 'on Google Play' },
      body: `${brand.name} was reviewed by teachers and child development specialists as part of Google Play’s Teacher Approved programme.`,
      badgeAlt: 'Google Play Teacher Approved badge',
      linkLabel: 'See it on the Play listing',
    },

    features: {
      oyunlar: {
        headline: { accent: 'Match Shape', rest: 'and Color in Balloons' },
        body: 'Children learn basic geometric shapes such as circle, square and triangle along with the colors of the rainbow. Finding the right balloon means tracking two properties at once.',
        bullets: [
          'Recognising basic geometric shapes',
          'Every color of the rainbow',
          'Tracking shape and color together',
        ],
      },
      sayilar: {
        headline: { accent: 'Count From', rest: '1 to 10' },
        body: 'Children count the shapes on the board and pick the matching number card. Clear instructions let them move at their own pace.',
        bullets: [
          'Counting objects and recognising numerals',
          'Visual perception and concentration',
          'Learning at their own pace',
        ],
      },
      'eksik-tamamla': {
        headline: { accent: 'Put the Missing', rest: 'Piece in Place' },
        body: 'Children drag the missing pieces into the baskets. These activities strengthen hand-eye coordination and fine motor skills.',
        bullets: [
          'Drag and drop activities',
          'Hand-eye coordination',
          'Simple controls for small hands',
        ],
      },
      'yanlis-renk': {
        headline: { accent: 'Spot the Wrong', rest: 'Color on the Cards' },
        body: 'When the strawberry is black and the bat is pink, children notice. Matching objects to their real colors exercises visual perception and memory.',
        bullets: [
          'Connecting objects to their real colors',
          'Visual memory and attention',
          'Animal, fruit and object cards',
        ],
      },
      sirala: {
        headline: { accent: 'Sort by Color', rest: 'and Shape' },
        body: 'The double-entry table game teaches children to reason with two properties at once: they need to find the one that is both “red” and “square”.',
        bullets: [
          'Double-entry table (logic matrix)',
          'Solving problems with two properties',
          'A first step towards critical thinking',
        ],
      },
    },

    download: {
      headline: `Get ${brand.name} today`,
      subtext:
        '100% ad-free, no Wi-Fi needed, and designed so little ones can play on their own.',
    },


    video: {
      headline: { accent: 'How to Play?', rest: 'A quick look' },
      subtext: `Take a peek into ${brand.name}\u2019s colorful world \u2014 a few scenes from the games.`,
      iframeTitle: `${brand.name} promo video`,
    },
    faq: {
      sectionId: 'why-illogan',
      headline: { accent: 'Why', rest: `${brand.name}?` },
      lead: 'Answers to the questions parents ask most.',
      items: [
        {
          q: 'Is the app really ad-free?',
          a: 'Yes, 100% ad-free. There are no pop-ups, banners or video ads. Download is free and there are no in-app purchases.',
        },
        {
          q: 'Does it need an internet connection?',
          a: 'No. All games are downloaded to the device and work offline. No Wi-Fi or mobile data required.',
        },
        {
          q: 'What age is it suitable for?',
          a: 'Designed for ages 2-5. No reading is required; voice guidance and simple controls let young children play independently.',
        },
        {
          q: 'Is my child\u2019s data collected?',
          a: 'No. The app does not require an account and collects no personal data. Game progress stays on the device only.',
        },
        {
          q: 'What does "Teacher Approved" mean?',
          a: 'As part of Google Play\u2019s Teacher Approved programme, the app was reviewed by teachers and child development specialists for educational quality, age-appropriateness and design.',
        },
        {
          q: 'What skills does it develop?',
          a: 'Basic geometric shapes, colours, counting 1-10, logic/classification, pattern completion, hand-eye coordination and visual memory.',
        },
      ],
    },
  },

  screenshots: {
    1: {
      caption: 'Find the color and the shape',
      alt: 'Colorful balloons shaped like squares, circles and stars in the sky; a girl character shows the requested shape and color in a speech bubble.',
    },
    2: {
      caption: 'Count from 1 to 10',
      alt: 'Triangles and stars drawn on a classroom board with number cards 8, 9, 7 and 4 below; a girl character asks for the correct number.',
    },
    3: {
      caption: 'Now complete what is missing',
      alt: 'A kitchen scene with colorful peppers sorted into baskets and missing pieces waiting to be completed.',
    },
    4: {
      caption: 'Find the wrong color',
      alt: 'Strawberry, bat and penguin cards where one is painted the wrong color, with a girl character in a lab coat beside them.',
    },
    5: {
      caption: 'Sort by color and shape',
      alt: 'An abacus-like rack in a garden with blocks to be sorted by shape and color, next to a helper character.',
    },
  },

  footer: {
    tagline:
      'Shapes, colors, numbers and logic games for preschoolers. Ad-free and offline.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Games', href: '#oyunlar', hash: true },
          { label: 'FAQ', href: '#why-illogan', hash: true },
          { label: 'Download', href: 'https://play.google.com/store/apps/details?id=com.ilugon.shapes.colors.toddler.games', external: true },
        ],
      },
      {
        title: 'For parents',
        links: [
          { label: 'Teacher Approved', href: '#ogretmen-onayli', hash: true },
          { label: 'Google Play listing', href: store.url, external: true },
          { label: 'Contact', page: 'contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', page: 'privacy' },
          { label: 'Terms of Use', page: 'terms' },
          { label: 'Data Protection Notice', page: 'kvkk' },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} ${company.legalName}. All rights reserved.`,
  },

  contact: {
    title: `Contact — ${brand.name}`,
    description: `Get in touch with ${brand.name} by email, phone or post.`,
    heading: { accent: 'Get in Touch', rest: 'and we will answer' },
    lead: 'Reach us through any of the channels below for questions, feedback or privacy requests about the app. We usually reply to emails within a business day.',
    cards: [
      { label: 'Email', icon: 'email', value: contact.email, href: contact.emailHref, color: 'ember-orange' },
      { label: 'Alternative email', icon: 'email', value: contact.altEmail, href: contact.altEmailHref, color: 'iris' },
      { label: 'Phone', icon: 'phone', value: contact.phone, href: contact.phoneHref, color: 'verdant-green' },
      {
        label: 'Address',
        icon: 'address',
        value: [company.legalName, ...contact.addressLines].join('\n'),
        color: 'sky-blue',
      },
    ],
    privacyNote:
      'For privacy or data protection requests, putting “Privacy” in the subject line speeds things up.',
  },

  notFound: {
    title: `Page not found — ${brand.name}`,
    description: 'The page you were looking for could not be found.',
    heading: { accent: 'Page Not Found', rest: 'but the games are still here' },
    body: 'The link may have moved or contained a typo. You can continue from the home page.',
  },

  legal: {
    privacy: {
      title: `Privacy Policy — ${brand.name}`,
      description: `${brand.name} privacy policy: the app works offline, needs no account and collects no personal data.`,
      heading: 'Privacy Policy',
      lead: `${brand.name} is an educational app made for children. This policy explains, in plain language, what information is processed when you use the app and this website.`,
      sections: [
        {
          heading: 'In short',
          paragraphs: [
            'The app works offline, does not ask you to create an account and shows no advertising.',
            'We do not collect personal data from you or your child through the app. Information only reaches us if you choose to email us.',
          ],
        },
        {
          heading: 'Who is responsible and how to reach us',
          paragraphs: [
            `${company.legalName} (“${brand.name}”, “we”) is responsible for this policy.`,
            `Address: ${address}`,
            `Email: ${contact.email} or ${contact.altEmail} · Phone: ${contact.phone}`,
          ],
        },
        {
          heading: 'Data we do not collect',
          paragraphs: [
            'The app does not collect personal data such as names, email addresses, phone numbers, postal addresses, photos, contacts, location or advertising identifiers.',
            'No account or sign-in is required to use the app. There is no behavioural advertising, no profiling and no sale of data.',
          ],
        },
        {
          heading: 'Information that stays on the device',
          paragraphs: [
            'Game progress and preferences such as sound or language are stored only in the device’s own storage. This information is not transmitted to us.',
            'Removing the app deletes this data from the device.',
          ],
        },
        {
          heading: 'Internet connection and permissions',
          paragraphs: [
            'The app does not need an internet connection in order to be played.',
            'You can see the current list of permissions the app requests, and the data declaration made to Google, in the “Data safety” section of the Google Play listing.',
          ],
        },
        {
          heading: 'Children’s privacy',
          paragraphs: [
            'The app is aimed at preschool children and is designed accordingly: there is no behavioural advertising, no personal data is requested from children, and no data is shared with third parties.',
            'We recommend supervising your child’s device use and setting screen time limits appropriate to their age.',
          ],
        },
        {
          heading: 'Distribution through Google Play',
          paragraphs: [
            'The app is distributed through Google Play. During download and store transactions, Google may process data under its own privacy policy. That processing is outside our control.',
            'We recommend reviewing Google’s privacy policy for store-side data practices.',
          ],
        },
        {
          heading: 'Information you send us yourself',
          paragraphs: [
            `When you write to ${contact.email}, we receive your email address, your name if you provide it, and the content of your message.`,
            'We use this information only to answer your request. Once the matter is resolved, it is deleted or archived within a reasonable period.',
          ],
        },
        {
          heading: 'Retention and security',
          paragraphs: [
            'We keep correspondence only for as long as it is needed.',
            'We apply reasonable technical and organisational measures to protect the information we hold against unauthorised access. Please note that no method of transmission is 100% secure.',
          ],
        },
        {
          heading: 'Your rights',
          paragraphs: [
            'Depending on where you live, you may have the right to access your data, request its correction or deletion, object to processing, and request data portability.',
            `To exercise these rights, write to ${contact.email}. We respond within 30 days at the latest.`,
            'If you reside in Türkiye, you can also review our Data Protection Notice covering your rights under Law No. 6698 (KVKK).',
          ],
        },
        {
          heading: 'Changes to this policy',
          paragraphs: [
            'We may update this policy from time to time. When we do, the “Last updated” date on this page changes.',
            'For significant changes we will try to give notice through the app or the store listing.',
          ],
        },
      ],
    },

    terms: {
      title: `Terms of Use — ${brand.name}`,
      description: `Terms of use for the ${brand.name} app and website.`,
      heading: 'Terms of Use',
      lead: `These terms govern your use of the ${brand.name} app and this website. By downloading or using the app you accept them.`,
      sections: [
        {
          heading: 'Scope',
          paragraphs: [
            `These terms apply to the ${brand.name} mobile app and website offered by ${company.legalName} (“we”).`,
            'If you do not accept them, please do not use the app and remove it from your device.',
          ],
        },
        {
          heading: 'Licence to use',
          paragraphs: [
            'We grant you a limited, non-transferable and non-exclusive right to use the app on your own device for personal, non-commercial purposes.',
            'This right does not transfer ownership of the app.',
          ],
        },
        {
          heading: 'What you must not do',
          paragraphs: [
            'You may not copy, reproduce, rent, sell or make the app available to third parties for a fee; decompile, reverse engineer or modify it; or attempt to circumvent its protection measures.',
            'Do not use the app for any unlawful purpose or in a way that infringes the rights of others.',
          ],
        },
        {
          heading: 'Parent and guardian responsibility',
          paragraphs: [
            'The app is aimed at preschool children. A parent or guardian who downloads the app on behalf of a user under 18 is deemed to accept these terms themselves.',
            'Supervising the child’s use of the app and deciding appropriate screen time is the parent’s responsibility.',
          ],
        },
        {
          heading: 'Educational purpose and its limits',
          paragraphs: [
            'The app is a playful learning tool. It does not replace a preschool curriculum, professional advice, or any form of diagnosis or therapy.',
            'If you have concerns about your child’s development, we recommend consulting a specialist.',
          ],
        },
        {
          heading: 'Intellectual property',
          paragraphs: [
            'All images, characters, sounds, texts, software code and brand elements in the app belong to us or our licensors and are protected by copyright.',
            'You may not use, reproduce or create derivative works from these elements without permission.',
          ],
        },
        {
          heading: 'Store terms',
          paragraphs: [
            'Because you obtain the app through Google Play, the Google Play Terms of Service also apply.',
            'Where these terms conflict with the store terms, the store terms govern matters relating to the store.',
          ],
        },
        {
          heading: 'Disclaimer of warranties',
          paragraphs: [
            'The app is provided “as is”. We make no express or implied warranty that it will operate uninterrupted or error-free.',
            'Because of device compatibility, operating system updates and hardware differences, the experience may vary from device to device.',
          ],
        },
        {
          heading: 'Limitation of liability',
          paragraphs: [
            'To the extent permitted by applicable law, we are not liable for indirect, incidental or consequential damages arising from use of the app.',
            'Your rights under consumer law that cannot be limited by contract remain unaffected.',
          ],
        },
        {
          heading: 'Changes and termination',
          paragraphs: [
            'We may update these terms, change the app’s features or discontinue it. When we update, the date on this page changes.',
            'Your right to use the app may end if you breach these terms.',
          ],
        },
        {
          heading: 'Governing law and contact',
          paragraphs: [
            'These terms are governed by the laws of England and Wales. This does not affect rights you have under the consumer law of your country of residence.',
            `Questions: ${contact.email} · ${company.legalName}, ${address}`,
          ],
        },
      ],
    },

    kvkk: {
      title: `Data Protection Notice — ${brand.name}`,
      description: `${brand.name} data protection notice, including rights under UK GDPR and Türkiye’s Law No. 6698 (KVKK).`,
      heading: 'Data Protection Notice',
      lead: 'This notice explains how personal data is handled and sets out your rights, including those under the UK GDPR and, for users in Türkiye, Law No. 6698 on the Protection of Personal Data (“KVKK”).',
      sections: [
        {
          heading: 'Identity of the controller',
          paragraphs: [
            `${company.legalName} is the data controller.`,
            `Address: ${address}`,
            `Email: ${contact.email} or ${contact.altEmail} · Phone: ${contact.phone}`,
          ],
        },
        {
          heading: 'Personal data processed',
          paragraphs: [
            'No personal data is collected through the mobile app: it works offline, requires no account and uses no advertising identifier.',
            'Processing happens only when you contact us. In that case we process the name you give us, your contact details (email address and phone number if provided) and the content of your message.',
          ],
        },
        {
          heading: 'Purposes of processing',
          paragraphs: [
            'To answer your requests, questions, feedback and complaints; to provide support; to respond to data protection requests; and to comply with our legal obligations.',
          ],
        },
        {
          heading: 'Legal bases',
          paragraphs: [
            'Under the UK GDPR we rely on our legitimate interests in responding to your enquiry, on the performance of a contract where relevant, and on compliance with legal obligations.',
            'For users in Türkiye, the corresponding bases are KVKK Art. 5/2-(c) being directly related to the conclusion or performance of a contract, Art. 5/2-(ç) compliance with a legal obligation and Art. 5/2-(f) legitimate interests. Where none of these apply, we ask for your explicit consent.',
          ],
        },
        {
          heading: 'Transfers',
          paragraphs: [
            'Your personal data is never sold or rented to third parties for marketing purposes.',
            'Email correspondence may be transferred abroad to the extent it is hosted on the servers of our email provider. Such transfer takes place only as far as necessary to answer your request, and for users in Türkiye within the framework of KVKK Art. 9.',
          ],
        },
        {
          heading: 'Retention period',
          paragraphs: [
            'Correspondence is kept for a reasonable period after your request is resolved and for as long as statutory limitation periods require, after which it is deleted, destroyed or anonymised.',
          ],
        },
        {
          heading: 'Your rights',
          paragraphs: [
            'You have the right to learn whether your personal data is processed, to request information about it, to learn the purpose of processing and whether the data is used in line with that purpose, and to know the third parties to whom it is transferred at home or abroad.',
            'You also have the right to request correction of incomplete or inaccurate data, deletion or destruction where the legal conditions are met, notification of these actions to third parties the data was transferred to, to object to a decision made solely by automated means that affects you adversely, and to claim compensation for damage caused by unlawful processing.',
          ],
        },
        {
          heading: 'How to make a request',
          paragraphs: [
            `To exercise your rights, email ${contact.email} or write to the postal address above.`,
            'Please include enough information for us to verify your identity and state your request clearly. Requests are answered free of charge within 30 days at the latest; where the action involves additional cost, a fee based on the applicable tariff may be charged.',
          ],
        },
        {
          heading: 'Updates',
          paragraphs: [
            'This notice may be revised because of changes in legislation or in our processes. The effective date is shown at the top of the page.',
          ],
        },
      ],
    },
  },
};

export default en;
