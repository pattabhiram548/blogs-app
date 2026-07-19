const dns = require("dns").promises;

async function test() {
  try {
    const records = await dns.resolveSrv(
      "_mongodb._tcp.cluster0.245dy24.mongodb.net"
    );
    console.log(records);
  } catch (err) {
    console.error(err);
  }
}

test();