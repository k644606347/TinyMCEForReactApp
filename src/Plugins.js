/**
 * Created by jiangyu3 on 2017/4/27.
 */
import advlist from "tinymce/plugins/advlist/plugin";
import autolink from "tinymce/plugins/autolink/plugin";
import link from "tinymce/plugins/link/plugin";
import lists from "tinymce/plugins/lists/plugin";
import searchreplace from "tinymce/plugins/searchreplace/plugin";
import wordcount from "tinymce/plugins/wordcount/plugin";
import visualblocks from "tinymce/plugins/visualblocks/plugin";
import visualchars from "tinymce/plugins/visualchars/plugin";
import image from "tinymce/plugins/image/plugin";
import table from "tinymce/plugins/table/plugin";
import paste from "tinymce/plugins/paste/plugin";
import contextmenu from "tinymce/plugins/contextmenu/plugin";
import colorpicker from "tinymce/plugins/colorpicker/plugin";
import print from "tinymce/plugins/print/plugin";
import tinymce from 'tinymce';

let exports = {}, name,
    loader = tinymce.ScriptLoader;

for (name in tinymce.PluginManager.lookup) {
    exports[name] = name;
    loader.markDone(name);
}
export default exports;