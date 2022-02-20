CKEditor 5 Markdown editor
==========================

This is a custom build of CKEditor for markdown editing.

## Documentation

See CKEditor 5 documentation.

## Quick start

First, install the build from npm:

```bash
npm install --save @esjeon/ckeditor5-build-markdown
```

And use it in your website:

```html
<div id="editor">
	<p>This is the editor content.</p>
</div>
<script src="./node_modules/@esjeon/ckeditor5-markdown/build/ckeditor.js"></script>
<script>
	MarkdownEditor
		.create( document.querySelector( '#editor' ) )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( error => {
			console.error( 'There was a problem initializing the editor.', error );
		} );
</script>
```

Or in your JavaScript application:

```js
import BalloonEditor from '@esjeon/ckeditor5-build-markdown';

// Or using the CommonJS version:
// const BalloonEditor = require( '@esjeon/ckeditor5-build-markdown' );

BalloonEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );
```

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license).
