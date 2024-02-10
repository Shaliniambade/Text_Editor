import PropTypes from 'prop-types'
import React, { Component } from 'react'

class TextBox extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       text:"",
       isBold:false,
       isItalic:false,
       fontFamily: " ",
       alignment: " ",
       color: "",
       fontSize: ""
    }
}

    handleTextChanges=(event)=>{
        this.setState({
            text:event.target.value
        })
    }


    changeToUpercase=()=>{
        this.setState({
            text:(this.state.text).toUpperCase()
        })
    }


    changeToLowercase=()=>{
        this.setState({
            text:(this.state.text).toLowerCase()
        })
    }

    // changeToBold

    changeToBold=()=>{
      this.setState({
        isBold: !this.state.isBold
      })
    }  
    
    changeToItalic =() =>{
      this.setState({
        isItalic: !this.state.isItalic
      })
    }  

    handleFontFamilyChange =(event)=>{
      this.setState({
        fontFamily:event.target.value
      });
    }


    handleColorChanges =(event)=>{
      this.setState({
        color:event.target.value
      });
    }

    changeAlignment =(event)=>{
      this.setState({ 
        alignment:event.target.value
      });
    }

    changeFontSize =(event)=>{
      this.setState({
        fontSize:event.target.value
      });
    }

    removeSpeacialCharacter =()=>{
      const textWithoutSpecialChars = this.state.text.replace(/[^\w\s]/gi, '');
      this.setState({
        text: textWithoutSpecialChars
      })
    }

    removeSpace =()=>{
      const textWithoutSpaces = this.state.text.replace(/\s/g, '');
      this.setState({
        text: textWithoutSpaces                
      });
    }

    copyText =()=>{
      navigator.clipboard.writeText(this.state.text);
      alert("Text Copied TO Clipboard");
    }

    clear=()=>{
        this.setState({
            text:(this.state.text)=""
        })
      } 

  render() {
    return (
      <>
      <h1 style={{fontSize:'50px',fontFamily:'cursive'}}>Text Box</h1>
      <h3 style={{color:"red", fontSize:'30px'}}>Enter Your Text</h3>
      <form action="">
        <textarea name="" id="" cols="100" rows="20" style={{
          fontWeight:this.state.isBold ? 'bold' : 'normal',
          fontFamily:this.state.isItalic ? 'italic' : 'normal',
          fontFamily:this.state.fontFamily,
          textAlign:this.state.alignment,
          color:this.state.color,
          fontSize:this.state.fontSize,
          position:'relative',
        }}  value={this.state.text} onChange={this.handleTextChanges}>
          </textarea><br /><br />
        <input type="button" value={"UPERCASE"} onClick={this.changeToUpercase}/>&nbsp;&nbsp;
        <input type="button" value={"LOWERCASE"} onClick={this.changeToLowercase}/>&nbsp;&nbsp;
        <input type="button" value={"BOLD"} onClick={this.changeToBold}/>&nbsp;&nbsp;
        <input type="button" value={"REMOVE SPECIAL CHARACTER"} onClick={this.removeSpeacialCharacter}/>&nbsp;&nbsp;
        <input type="button" value={"REMOVE SPACE"} onClick={this.removeSpace}/>&nbsp;&nbsp;
      

        <br /><br />


        <select name="" id="" onChange={this.handleFontFamilyChange}>
        <option selected disabled>FONT FAMILY</option>
          <option value="italic">ITALIC</option>
          <option value="Arial">ARIAL</option>
          <option value="sans-serif">SANS-SERIF</option>
          <option value="Times New Roman">TIMES NEW ROMAN</option>
        </select>&nbsp;&nbsp;


        <select name="" id="" onChange={this.handleColorChanges}>
        <option selected disabled>COLOR</option>
          <option value="#000000">Black</option>
          <option value="#FF0000">Red</option>
          <option value="#00FF00">Green</option>
          <option value="#0000FF">Blue</option>
          <option value="#FFFF00">Yellow</option>
          <option value="#FF00FF">Magenta</option>
          <option value="#008000">Green Gark</option>
          <option value="#000080">Navy</option>
        </select>&nbsp;&nbsp;


        <select name="" id="" onChange={this.changeAlignment}>
        <option selected disabled>ALIGNMENT</option>
          <option value="left">LEFT</option>
          <option value="right">RIGHT</option>
          <option value="center">CENTER</option>
          <option value="justify">JUSTIFY</option>
        </select>&nbsp;&nbsp;

        <select name="" id="" onChange={this.changeFontSize}>
          <option value="10px">10</option>
          <option value="12px">12</option>
          <option value="14px">14</option>
          <option value="16px">16</option>
          <option value="18px">18</option>
          <option value="20px">20</option>
          <option value="22px">22</option>
        </select>&nbsp;&nbsp;

        <input type="button" value={"COPY TEXT"} onClick={this.copyText} />&nbsp;&nbsp;

        <input type="button" value={"CLEAR"} onClick={this.clear} />&nbsp;&nbsp;
        
      </form>
      </>
    )
  }
}

export default TextBox