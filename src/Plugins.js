/**
 * Created by jiangyu3 on 2017/4/27.
 */
import advlist from "tinymce/plugins/advlist/plugin.min";
import autolink from "tinymce/plugins/autolink/plugin.min";
import link from "tinymce/plugins/link/plugin.min";
import lists from "tinymce/plugins/lists/plugin.min";
import searchreplace from "tinymce/plugins/searchreplace/plugin.min";
import wordcount from "tinymce/plugins/wordcount/plugin.min";
import visualblocks from "tinymce/plugins/visualblocks/plugin.min";
import visualchars from "tinymce/plugins/visualchars/plugin.min";
import image from "tinymce/plugins/image/plugin.min";
import table from "tinymce/plugins/table/plugin.min";
import paste from "tinymce/plugins/paste/plugin.min";
import contextmenu from "tinymce/plugins/contextmenu/plugin.min";
import colorpicker from "tinymce/plugins/colorpicker/plugin.min";
import print from "tinymce/plugins/print/plugin.min";
import tinymce from 'tinymce/tinymce.min';

let exports = {}, name,
    loader = tinymce.ScriptLoader;

for (name in tinymce.PluginManager.lookup) {
    exports[name] = name;
    loader.markDone(name);
}
export default exports;