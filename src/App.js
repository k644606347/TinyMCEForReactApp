import React, { Component } from 'react';
import logo from './logo.svg';
import appCSS from './App.css';
import contentCSS from 'tinymce/skins/lightgray/content.min.css';
import tinymce from 'tinymce';
import theme from 'tinymce/themes/modern/theme';
import Plugins from './Plugins';

console.log(appCSS.toString());
console.log(contentCSS, contentCSS.toString());

class App extends Component {
    static field = 'app';
    render() {
        return (
            <div className="App">
                <textarea defaultValue={App.field}>
                </textarea>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
        </p>
            </div>
        );
    }
    componentDidMount() {
        import('tinymce/skins/lightgray/skin.min.css').then((res) => {
            console.log('then', arguments);
            
            tinymce.init({
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
                content_style: contentCSS.toString(),
                mobile: {
                    theme: 'mobile',
                    plugins: ['autosave', 'lists', 'autolink'],
                    toolbar: ['undo', 'bold', 'italic', 'styleselect']
                }
            });
        }).catch(() => {
            console.log('catch', arguments);
        })

    }
}

export default App;
