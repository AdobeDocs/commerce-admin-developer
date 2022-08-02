---
title: Image Uploader | Commerce Admin Development
description: Learn about design standards for image uploaders in the Adobe Commerce and Magento Open Source Admin application.
---

# Image uploader

The Image uploader provides the ability for users to upload a single image, or group of images, to the application, most commonly images associated with Products (during the Product Creation process). These images may serve as thumbnail images, detailed Product images, images to within a product gallery, etc.

## When to Use

When it is desirable to allow users to upload a single image or multiple images for display within the [Admin](https://glossary.magento.com/magento-admin) or on the [Storefront](https://glossary.magento.com/storefront).

## When Not to Use

This pattern should be used specifically to upload images, and not to upload documents such as PDFs, WordDocs, Spreadsheets, etc. Please refer to the "File Upload" pattern.

## Variations

1. Upload Single Image
1. Upload Multiple Images
1. Upload Video Content

## Behavior

**Uploading via Browser:**

The Image Uploader allows the user to browse for images to upload to the [Admin](https://glossary.magento.com/admin) application. This can accommodate single or multiple image upload. To initiate this behavior the user clicking on the "Upload Image" link (target area). The user then proceeds to select the desired images via the browser, using SHIFT + click or ALT/COMMAND + click to select multiple image files.

![](../../_images/pattern-library/image-uploader-browse.jpg)

**Uploading via Drag and Drop:**

The user may also upload images (single or multiple) by dragging the desired images onto the Image Upload target area.

![](../../_images/pattern-library/image-uploader-drag.jpg)

**Uploading Video Content:**

To upload a video to the Admin application the user taps the "Add Video" button.

![](../../_images/pattern-library/image-uploader-video-button.jpg)

![](../../_images/pattern-library/image-uploader-video-uploaded.jpg)

A video settings panel is revealed that allows the user to provide the [URL](https://glossary.magento.com/url) location of the video, write a description and upload a preview image for the video. The user taps the "Save" button to upload the information.

![](../../_images/pattern-library/image-uploader-video-panel.jpg)

Once the video information is saved, the video settings panel closes and the user is returned to the image uploader (section) where the video preview image now appear.

![](../../_images/pattern-library/image-uploader-video-panel.jpg)

<InlineAlert variant="info" />

Currently the application does not allow Drag and Drop for Video Content.

**Drag to Arrange Order:**

The order in which images are displayed can be arranged by dragging the image or video to the desired position.
![](../../_images/pattern-library/image-uploader-arrange.jpg">

**Image Settings:**

In some areas of the Admin application uploaded images my have additional settings that effect the display of these images on the Storefront (e.g. Product Creation). These settings can be accessed via the "gear" icon found on the image thumbnail.

![](../../_images/pattern-library/image-uploader-settings.jpg)

**Deleting an Image:**

Likewise, an image may be removed from the Admin application by tapping the "trashcan" icon.

![](../../_images/pattern-library/image-uploader-delete.jpg)

## Dimensions

![](../../_images/pattern-library/multi-image-uploader-style.jpg)

## Accessibility

To initiate the uploader, the buttons should follow button accessibility guidelines: [http://www.w3.org/TR/WCAG10-HTML-TECHS/#forms-graphical-buttons](http://www.w3.org/TR/WCAG10-HTML-TECHS/#forms-graphical-buttons)

In the browser upload window, standard behavior should be kept.

## Assets

[Download Image Uploader PSD source](https://devdocs.magento.com/download/Image_Video_Uploader.psd).
