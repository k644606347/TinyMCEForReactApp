import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ComosEditor from './ComosEditor';

let textarea1 = document.createElement('textarea');
textarea1.value = 'aaa';

document.querySelector('#root').appendChild(textarea1);

let editor = null;
ComosEditor.init({
    selector: 'textarea',
    height: 500,
    theme: 'modern',
    plugins: [
        'advlist autolink lists link',
        'searchreplace wordcount visualblocks visualchars',
        'image table paste colorpicker contextmenu'
    ],
    skin: false,
    toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | image table removeformat',
    image_advtab: true,
    templates: [
        { title: 'Test template 1', content: 'Test 1' },
        { title: 'Test template 2', content: 'Test 2' }
    ],
    contextmenu: "link image inserttable | cell row column deletetable",
    // mobile: {
    //     theme: 'mobile',
    //     plugins: ['autosave', 'lists', 'autolink'],
    //     toolbar: ['undo', 'bold', 'italic', 'styleselect']
    // }
}).then((res) => {
    editor = res;
}).catch((e) => {
    console.error(e);
});

registerServiceWorker();
