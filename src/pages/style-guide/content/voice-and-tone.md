---
title: Voice and tone | Commerce Admin Development
description: Leanr how to write custom content using the proper voice and tone for the Adobe Commerce and Magento Open Source Admin application.
keywords:
  - Extensions
---

# Voice and tone

Our priority is to help users perform administrative tasks with ease and manage their stores effectively.

The application's voice is:

*  Instructional and clear. The content is concise but informational, guiding the user to successfully perform tasks.
*  Casual but professional and direct.
*  Empowering.

## Guidelines

**Write casual, but professional, content in gender-neutral terms.**

Create a consistent tone of communication that sounds like dialogue, as you would hear it. Here's a useful tip when creating copy: Imagine describing the product or task face-to-face with a new marketing employee tasked with using Admin.

Write sentences with plain, concise language. Use contractions for verbs. Never use a long word when a shorter word can take its place, and omit unnecessary words.

Content should be gender neutral. To avoid "his" or "her" pronouns, change singular pronouns to plural and use a gender-neutral "their", instead.

*Example:*

*  **No** – "A merchant can update his extensions."
*  Yes – "Merchants can update their extensions."

**Follow accessibility and readability standards.**

To ensure that users with special needs – including the use of screen readers – can easily access your content, follow the content and design standards in the Admin Design Pattern Library's [Accessibility Guidelines](https://developer.adobe.com/commerce/admin-developer/pattern-library/general/accessibility-guidelines/).

For more guidance, see this summary of [Web Content Accessibility Guidelines (WCAG) 2.0 standards](https://www.w3.org/WAI/WCAG20/glance/).

Also, test your content's readability. On the [Flesch-Kincaid Readability Test](http://www.readabilityformulas.com/free-readability-formula-tests.php), Admin content should score above 50, which is approximately high-school level.

**Use correct terms and content style.**

In all contexts, strive for accuracy and consistency to inspire and build confidence in performing tasks.

When uncertain about using a correct term or style, consult the following documents:

*  The [Glossary](https://experienceleague.adobe.com/en/docs/commerce-operations/implementation-playbook/glossary)

*  [Admin Design Pattern Library](https://developer.adobe.com/commerce/admin-developer/pattern-library/)

For standards not included in those documents, we use the following stylebooks:

*  *First reference:* The Associated Press (AP) Stylebook

*  *Second reference:* Microsoft Manual of Style, specifically these chapters:

   *  Content for a worldwide audience (Ch. 3)
   *  Accessible content (Ch. 4)
   *  Procedures and technical content (Ch. 6)

**Avoid jargon, slang, and acronyms.**

Words like "optimize", "flexible", and "scalable" might be big, but they're not clever, unless they're used in accurate context for the appropriate audience.

Avoid terms that may not translate internationally, like metaphors, other figurative language, and humor.

When introducing a term that may be unfamiliar to merchants, apply a glossary term from the [Glossary](https://experienceleague.adobe.com/en/docs/commerce-operations/implementation-playbook/glossary), provide further explanation, or add contextual help. To see what acronyms can be used on first reference check the AP Stylebook. When in doubt, use the full spelling and add the acronym in parenthesis afterword.

*Example:*

*  **No** – "Adobe Commerce is the flexible commerce solution."
*  Yes – "With Adobe Commerce, almost everything can be customized, from the storefront user interface theme to the site's backend processes."

*Example:*

*  **No** – "This SaaS feature is only available in Adobe Commerce."
*  Yes – "This software as a service (SaaS) feature is only available in Adobe Commerce."

**Empower the merchant with positive tone and sentence structure.**

Avoid negative sentence constructions using words like "no", "never", "don't" to ensure clarity and a positive tone.

*Example:*

* **No** – Don't use negative sentence construction.
*  Yes – Use positive, instead of negative, sentence construction.

**Use active voice.**

Active voice uses the subject-verb-object construction. When describing an action, start the sentence with the actor – usually the user. Active-voice sentences clarify who's performing an action, making sentences easier to understand than passive-voice sentences.

Passive voice identifies the action's recipient, not the source, as the subject of the verb. Passive voice is more complicated and less engaging.

Use the "zombie test" – if you can put the words "by zombies" after a subject and verb, you're using passive voice. *Passive-voice example:* "Magento Oopen Source is used (by zombies)"

*Example:*

*  **No**  – "The store address is used to calculate ..."
*  Yes – "The system uses the store address to calculate ..."

**Write in present tense.**

When a user is reading web content to accomplish a task, these tasks take place in their present, so the present tense is appropriate in most cases.

Additionally, present tense is easier to read than past or future tense.

Use future tense only to emphasize that something, from the user's perspective, will occur later.

*Example:*

*  **No** – A customer will receive an email confirmation after purchase.
*  Yes – A customer receives an email confirmation after purchase.

**Avoid personal pronouns.**

Most websites have eliminated personal pronouns because using pronouns like "you" and "I" or "your" and "my" is confusing. Personal pronouns often leave room for doubt or misinterpretation – does a pronoun refer to the application or to the merchant? Avoid using "my", "we", "they", or "I" when your content refers to either Adobe representatives or merchants.

*Exception:* "You" or "your" neutral pronouns may be used in some cases to directly engage merchants in familiar, conversational language.

*Example:*

*  **No** – Change your My Account preferences.
*  Yes – Change your Account preferences.

*Example:*

* **No** – We will send a confirmation, and you will receive it in 2-3 days.
*  Yes – You will receive a confirmation in 2-3 days.

**Use consistent labels in user-interface (UI) content.**

The tone in UI content – including navigation, tables, forms, and calls to action – is usually more focused on accuracy and conciseness, but the same standards apply: Use clear, plain language and consult global conventions to ensure content is understood by all.

Consistency is critical. For example, wherever content is displayed in [Data Tables](https://developer.adobe.com/commerce/admin-developer/pattern-library/displaying-data/datatable/) or [Form Elements](https://developer.adobe.com/commerce/admin-developer/pattern-library/getting-user-input/form-elements/), it should use standard or global conventions.

*Correct example of button-label consistency, in a task flow:*

*  Yes – "Continue" button in "Catalog" pages
*  Yes – "Continue" button in "Reports" pages

*Incorrect example of button-label consistency, in a task flow:*

* **No** – "Next" button in "Catalog" pages
*  Yes – "Continue" button in "Reports" pages

*For more details,* see [Button and Links Usage standards](buttons-and-links.md).

**Write empowering errors and messages that lead to appropriate next steps.**

Take a neutral tone – don't blame a merchant or in any way indicate that the merchant made a mistake. Use "business casual" and easy-to-understand language. Avoid personal pronouns and technical jargon. Content structure and formatting should follow this order:

1. Tell merchants what went wrong, in specific terms.
1. Instruct how to fix the problem and continue the current task. If the error can't be resolved online, try to give merchants an appropriate offline contact option and a timeframe when they should try again.

*Example:*

* **No** – "You didn't enter your email address."
*  Yes – "An email address is required. Enter the email address and click "Continue"."

*For more details,* see [Errors and Messages Writing standards](errors-and-messages.md).
