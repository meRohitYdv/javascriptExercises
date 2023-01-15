module.exports = (str, substr)=>{
    return (str.substring(str.length-substr.length, str.length)===substr)?true:false;
};