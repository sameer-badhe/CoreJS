  /* ========================================================================
    4.Write a JavaScript function to split a string and convert it into an array
      of words.
      Test Data :
      console.log(string_to_array("Robin Singh"));
      ["Robin", "Singh”]
  ========================================================================= */
  
  var text = "Robin Singh";
  function string_to_array(textdata) {
    return text.split(" ");
  }
  console.log(string_to_array("Robin Singh"));
