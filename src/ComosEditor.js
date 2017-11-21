import tinymce from 'tinymce/tinymce.min';
import theme from 'tinymce/themes/modern/theme';
import Plugins from './Plugins';
import contentCSS from 'tinymce/skins/lightgray/content.min.css';
import skin from 'tinymce/skins/lightgray/skin.min.css';

console.log(contentCSS, contentCSS.toString());

class ComosEditor {
    static editors = [];
    static init(settings) {
        let cloneSettings = Object.assign({
            skin: false,
            content_style: contentCSS.toString()
        }, settings);
    

        return tinymce.init(cloneSettings).then((res) => {

        }).catch(() => {

        })
    };
    static remove(editorID) {
        for (let editor of ComosEditor.editors) {
            if (editor && editor.id === editorID) {
                editor.remove();
                break;
            }
        }
    }
}

export default ComosEditor;