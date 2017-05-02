//Write a function that when given a URL as a string, 
//parses out just the domain name and returns it as a string. 
function domainName(url){
  url = url.split("https://").join("").split("http://").join("").split("www.").join("").split(".");
  return url[0];
}