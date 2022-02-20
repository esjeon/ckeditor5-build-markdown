/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { BalloonEditor } from '@ckeditor/ckeditor5-editor-balloon';
import { Essentials } from '@ckeditor/ckeditor5-essentials';

import { AutoImage, Image, ImageCaption, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { BlockToolbar } from '@ckeditor/ckeditor5-ui';
import { Bold, Code, Italic, Strikethrough } from '@ckeditor/ckeditor5-basic-styles';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { List } from '@ckeditor/ckeditor5-list';
import { Markdown } from '@ckeditor/ckeditor5-markdown-gfm';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { Title, Heading } from '@ckeditor/ckeditor5-heading';
import { WordCount } from '@ckeditor/ckeditor5-word-count';

import '../theme/theme.css';

export default class MarkdownEditor extends BalloonEditor {}

// Plugins to include in the build.
MarkdownEditor.builtinPlugins = [
	Essentials,

    AutoImage, Image, ImageCaption, ImageToolbar, ImageUpload,
    AutoLink, Link,
    Autoformat,
    Autosave,
    BlockQuote,
    BlockToolbar,
    Bold, Code, Italic, Strikethrough,
    CodeBlock,
    HorizontalLine,
    List,
    Markdown,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    SimpleUploadAdapter,
    Table, TableToolbar,
    Title, Heading,
    WordCount,
];

// Editor configuration.
MarkdownEditor.defaultConfig = {
	blockToolbar: [
		'heading', '|',
		'bulletedList', 'numberedList', 'blockQuote', '|',
		'blockQuote', 'uploadImage', 'horizontalLine', '|',
		'undo', 'redo'
	],
	toolbar: {
		items: [
			'bold', 'italic', 'strikethrough', 'code', 'link', '|',
			'removeFormat',
		]
	},
	image: {
		toolbar: [
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
