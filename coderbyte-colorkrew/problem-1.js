function HTMLElements(str) {
  const openingTags = str.match(/<\w+>/g)
  const closingTags = str.match(/(<\/\w+>)/g);
  
  const strObj = {
    '<div>': '</div>',
    '<p>': '</p>',
    '<i>': '</i>',
    '<p>': '</p>',
    '<em>': '</em>',
    '<b>': '</b>',
  };
  
  // there might not be the same number of opening and closing tags
  const max = Math.max(openingTags.length, closingTags.length);
  
  for (let i = 0; i < max; i++) {
    if (strObj[openingTags[i]] !== closingTags[closingTags.length - 1] && strObj[openingTags[i]] !== closingTags[0]) {
      return (openingTags[i]).replace(/<|>/g, '');
    }
      closingTags.splice(closingTags.indexOf(strObj[openingTags[i]]),1);
  }

  return "true";
}

//console.log(HTMLElements("<div><div><b></b></div></p>"));
console.log(HTMLElements("<div>abc</div><p><em><i>test test test</b></em></p>"));
//console.log(HTMLElements("<div><div><b><b/></div><p/>"));
//console.log(HTMLElements("<div>abc</div><p><em><i>test test test</b></em></p>"));
//console.log(HTMLElements("<div><p></p><em><div></div></em></div>"));