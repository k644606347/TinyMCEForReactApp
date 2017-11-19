import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import tinymce from 'tinymce';
import skin from 'tinymce-light-skin';
import theme from 'tinymce/themes/modern';

skin.use();
console.log(skin.contentStyle);
// import skin from 'tinymce/skins/lightgray/skin.min.css';
// import mobile from 'tinymce/skins/lightgray/skin.mobile.min.css';

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
    tinymce.init({
        selector: 'textarea',
        height: 500,
        theme: 'modern',
        plugins: 'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount tinymcespellchecker a11ychecker imagetools mediaembed  linkchecker contextmenu colorpicker textpattern help',
        toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
        image_advtab: true,
        templates: [
          { title: 'Test template 1', content: 'Test 1' },
          { title: 'Test template 2', content: 'Test 2' }
        ],
        content_style: skin.contentStyle,
      mobile: {
        theme: 'mobile',
        plugins: [ 'autosave', 'lists', 'autolink' ],
        toolbar: [ 'undo', 'bold', 'italic', 'styleselect' ]
      }
    });
    
  }
}

export default App;
