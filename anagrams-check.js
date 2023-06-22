function checkAnagram(set1, set2) {

    let len1 = set1.length;
    let len2 = set2.length;

    if(len1 !== len2){

        console.log("Given Strings are not Anagram");

    }

   
      let str1 = set1.split('').sort().join('');
      let str2 = set2.split('').sort().join('');

    if(str1 === str2) {

     console.log("Given Strings are Anagram");

    }

    else {

        console.log("Given Strings are Not Anagram");


    }


    
}

checkAnagram("india", "nidia");
checkAnagram("india", "ssnidia");