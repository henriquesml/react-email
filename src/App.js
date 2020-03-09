import React, { Component } from 'react'
import EmailEditor from 'react-email-editor'

class App extends Component {
  render() {
    return <div>
      <h1>react-email-editor Demo</h1>

      <div>
        <button onClick={this.exportHtml}>Export HTML</button>
      </div>

      <EmailEditor
        locale='pt-BR'
        ref={editor => this.editor = editor}
      />
    </div>
  }

  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data
      console.log('exportHtml', html)
    })
  }
}

export default App;
