---
title: Address Form | Commerce Admin Development
description: Learn about design standards for address forms in the Adobe Commerce and Magento Open Source Admin application.
---

# Address form

This article discusses standards and rules for an address entry forms.

For solutions not described in this article, please refer to other related patterns or contact the Commerce UX Design team.

## When to Use / When Not to Use

The address entry fields should be used whenever an address needs to be captured. This set of form elements will be universal across the application user experience. This pattern should follow rules established in the Form Elements and related patterns.

## Variations

The only variation of this pattern at this time is the North American Address Entry format. Users have the ability to create address entry formats for other locales within the system.

### Fields That Make Up Address Entry (in order)

<table>
  <thead>
    <th>Label</th>
    <th>Input Type</th>
    <th>Required?</th>
  </thead>
  <tbody>
    <tr>
      <td>Address Line 1</td>
      <td>Text Field</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Address Line 2</td>
      <td>Text Field</td>
      <td>No</td>
    </tr>
    <tr>
      <td>City</td>
      <td>Text Field</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>State/Province</td>
      <td>Dropdown (Default can be localized)</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>ZIP/Postal Code</td>
      <td>Text Field</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Country</td>
      <td>Dropdown (Default can be localized)</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

![](../../_images/pattern-library/AddressForm_example01.jpg)

## Styling

This pattern will follow the Form standards established in the Form Elements and related patterns. Refer to the Form Elements and related patterns for style information.

## Usage Example

![](../../_images/pattern-library/AddressForm_example02.jpg)

## Assets

Source files associated with this article are currently attached the Form Elements Pattern.