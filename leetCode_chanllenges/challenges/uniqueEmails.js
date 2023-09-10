var numUniqueEmails = function(emails) {
  const uniqeEmails = new Set();
  for(email of emails){
      let [local,domain] = email.split("@");
      local = local.replace(/\./g, '').split('+')[0]
      let resEmail = local + "@" + domain;
      uniqeEmails.add(resEmail);
  }  
  return uniqeEmails.size;
};

let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
numUniqueEmails(emails)