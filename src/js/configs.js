// configs for the supported pieces of software
// hasVersions, showSupports, supportsHsts, and usesOpenssl only need to be defined if false
// cipherFormat is assumed to be 'openssl' unless defined otherwise


module.exports = {
  apache: {
    latestVersion: '2.4.60',
    eolBefore: '2.4.0',
    name: 'Apache',
    supportsOcspStapling: '2.4.13',
    tls13: '2.4.36',
  },
  awsalb: {
    hasVersions: false,
    latestVersion: '2023.3.22',
    name: 'AWS ALB',
    showSupports: false,
    supportsOcspStapling: false,
    tls13: '2023.3.22',
    usesOpenssl: false,
  },
  // supported ciphers generated with:
  // aws elb describe-load-balancer-policies --query "PolicyDescriptions[?PolicyName=='ELBSample-ELBDefaultCipherPolicy'].PolicyAttributeDescriptions[*].AttributeName[]"
  awselb: {
    hasVersions: false,
    latestVersion: '2014.2.19',
    name: 'AWS ELB',
    supportedCiphers: ['ECDHE-ECDSA-AES128-GCM-SHA256', 'ECDHE-RSA-AES128-GCM-SHA256', 'ECDHE-ECDSA-AES128-SHA256', 'ECDHE-RSA-AES128-SHA256', 'ECDHE-ECDSA-AES128-SHA', 'ECDHE-RSA-AES128-SHA', 'DHE-RSA-AES128-SHA', 'ECDHE-ECDSA-AES256-GCM-SHA384', 'ECDHE-RSA-AES256-GCM-SHA384', 'ECDHE-ECDSA-AES256-SHA384', 'ECDHE-RSA-AES256-SHA384', 'ECDHE-RSA-AES256-SHA', 'ECDHE-ECDSA-AES256-SHA', 'AES128-GCM-SHA256', 'AES128-SHA256', 'AES128-SHA', 'AES256-GCM-SHA384', 'AES256-SHA256', 'AES256-SHA', 'DHE-DSS-AES128-SHA', 'CAMELLIA128-SHA', 'EDH-RSA-DES-CBC3-SHA', 'DES-CBC3-SHA', 'ECDHE-RSA-RC4-SHA', 'RC4-SHA', 'ECDHE-ECDSA-RC4-SHA', 'DHE-DSS-AES256-GCM-SHA384', 'DHE-RSA-AES256-GCM-SHA384', 'DHE-RSA-AES256-SHA256', 'DHE-DSS-AES256-SHA256', 'DHE-RSA-AES256-SHA', 'DHE-DSS-AES256-SHA', 'DHE-RSA-CAMELLIA256-SHA', 'DHE-DSS-CAMELLIA256-SHA', 'CAMELLIA256-SHA', 'EDH-DSS-DES-CBC3-SHA', 'DHE-DSS-AES128-GCM-SHA256', 'DHE-RSA-AES128-GCM-SHA256', 'DHE-RSA-AES128-SHA256', 'DHE-DSS-AES128-SHA256', 'DHE-RSA-CAMELLIA128-SHA', 'DHE-DSS-CAMELLIA128-SHA', 'ADH-AES128-GCM-SHA256', 'ADH-AES128-SHA', 'ADH-AES128-SHA256', 'ADH-AES256-GCM-SHA384', 'ADH-AES256-SHA', 'ADH-AES256-SHA256', 'ADH-CAMELLIA128-SHA', 'ADH-CAMELLIA256-SHA', 'ADH-DES-CBC3-SHA', 'ADH-DES-CBC-SHA', 'ADH-RC4-MD5', 'ADH-SEED-SHA', 'DES-CBC-SHA', 'DHE-DSS-SEED-SHA', 'DHE-RSA-SEED-SHA', 'EDH-DSS-DES-CBC-SHA', 'EDH-RSA-DES-CBC-SHA', 'IDEA-CBC-SHA', 'RC4-MD5', 'SEED-SHA', 'DES-CBC3-MD5', 'DES-CBC-MD5', 'RC2-CBC-MD5', 'PSK-AES256-CBC-SHA', 'PSK-3DES-EDE-CBC-SHA', 'KRB5-DES-CBC3-SHA', 'KRB5-DES-CBC3-MD5', 'PSK-AES128-CBC-SHA', 'PSK-RC4-SHA', 'KRB5-RC4-SHA', 'KRB5-RC4-MD5', 'KRB5-DES-CBC-SHA', 'KRB5-DES-CBC-MD5', 'EXP-EDH-RSA-DES-CBC-SHA', 'EXP-EDH-DSS-DES-CBC-SHA', 'EXP-ADH-DES-CBC-SHA', 'EXP-DES-CBC-SHA', 'EXP-RC2-CBC-MD5', 'EXP-KRB5-RC2-CBC-SHA', 'EXP-KRB5-DES-CBC-SHA', 'EXP-KRB5-RC2-CBC-MD5', 'EXP-KRB5-DES-CBC-MD5', 'EXP-ADH-RC4-MD5', 'EXP-RC4-MD5', 'EXP-KRB5-RC4-SHA', 'EXP-KRB5-RC4-MD5'],
    supportsHsts: false,
    usesOpenssl: false,
  },
  caddy: {
    cipherFormat: 'caddy',
    latestVersion: '2.8.4',
    eolBefore: '2.0.0',
    name: 'Caddy',
    tls13: '0.11.5',
    usesOpenssl: false,
  },
  coturn: {
    latestVersion: '4.6.2',
    name: 'Coturn',
    showSupports: false,
    supportsHsts: false,
    tls13: '4.6.2',
  },
  dovecot: {
    latestVersion: '2.3.21',
    eolBefore: '2.2.36', // https://dovecot.org/list/dovecot/2018-August/112536.html
    name: 'Dovecot',
    showSupports: false,
    supportsHsts: false,
    tls13: '2.3.15',
  },
  exim: {
    latestVersion: '4.98',
    eolBefore: '4.98',
    name: 'Exim',
    showSupports: false,
    supportsHsts: false,
    tls13: '4.92.0',
  },
  go: {
    cipherFormat: 'go',
    latestVersion: '1.23.3',
    eolBefore: '1.22.0',
    name: 'Go',
    tls13: '1.13.0',
    usesOpenssl: false,
  },
  haproxy: {
    latestVersion: '3.0',
    eolBefore: '2.2',
    name: 'HAProxy',
    tls13: '1.8.0',
  },
  jetty: {
    cipherFormat: 'iana',
    latestVersion: '12.0.15',
    eolBefore: '12.0.0',
    name: 'Jetty',
    supportsHsts: false,
    tls13: '9.4.12',
    usesOpenssl: false,
  },
  lighttpd: {
    latestVersion: '1.4.77',
    eolBefore: '1.4.69',
    name: 'lighttpd',
    supportsOcspStapling: '1.4.56',
    tls13: '1.4.48',
  },
  mysql: {
    latestVersion: '9.1.0',
    eolBefore: '8.0.0',
    name: 'MySQL',
    showSupports: false,
    supportsHsts: false,
    tls13: '8.0.16',
  },
  nginx: {
    latestVersion: '1.27.3',
    eolBefore: '1.26.0',
    name: 'nginx',
    supportsOcspStapling: '1.3.7',
    tls13: '1.13.0',
  },
  openssl: {
    latestVersion: '3.4.0',
    eolBefore: '3.0.0',
    tls13: '1.1.1',
  },
  oraclehttp: {
    cipherFormat: 'iana',
    latestVersion: '12.2.1',
    name: 'Oracle HTTP',
    usesOpenssl: false,
  },
  postfix: {
    latestVersion: '3.9.0',
    eolBefore: '3.6.0',
    name: 'Postfix',
    showSupports: false,
    supportsHsts: false,
    tls13: '3.3.2',
  },
  postgresql: {
    latestVersion: '17.2',
    eolBefore: '13.0',
    name: 'PostgreSQL',
    showSupports: false,
    supportsHsts: false,
    tls13: '12.0',
  },
  proftpd: {
    latestVersion: '1.3.8',
    eolBefore: '1.3.8',  // http://www.proftpd.org/docs/howto/Versioning.html
    name: 'ProFTPD',
    showSupports: false,
    supportsHsts: false,
    supportsOcspStapling: '1.3.6',
    tls13: '1.3.7',
  },
  redis: {
    latestVersion: '7.4.1',
    eolBefore: '7.4.0',
    name: 'Redis',
    showSupports: false,
    supportsHsts: false,
    tls13: '6.0',
  },
  squid: {
    latestVersion: '6.12',
    eolBefore: '6.0',
    name: 'Squid',
    showSupports: false,
    supportsHsts: false,
    tls13: '4',
  },
  stunnel: {
    latestVersion: '5.73',
    name: 'stunnel',
    supportsHsts: false,
    tls13: '5.50',
  },
  tomcat: {
    latestVersion: '11.0.1',
    eolBefore: '9.0.0',
    name: 'Tomcat',
    tls13: '8.0.0',
    usesOpenssl: false,
  },
  traefik: {
    cipherFormat: 'go',
    latestVersion: '3.2.1',
    eolBefore: '2.11.0',
    name: 'Traefik',
    tls13: '2.0.0',
    usesOpenssl: false,
  },
  openlitespeed: {
    latestVersion: '1.8.3',
    eolBefore: '1.4.35',
    name: 'OpenLiteSpeed',
    supportsOcspStapling: '1.2',
    tls13: '1.4.35',
    usesOpenssl: false,
  },
};
