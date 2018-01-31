const assert      = require('assert');
require('../index');

describe('Millisecondes', function() {
  it('Millisecondes To Human', () => {
    let nbr = 6546546116541 ;
    assert.equal(nbr.msToPretty(), '207 years, 5 months, 1 week, 4 days, 6 hours, 31 minutes, 57 seconds');
  });
  it('Millisecondes To Human French', () => {
    let nbr = 6546546116541 ;
    assert.equal(nbr.msToPretty('fr'), '207 ans, 5 mois, 1 semaine, 4 jours, 6 heures, 31 minutes, 57 secondes');
  });
  it('Millisecondes To Human Arabic', () => {
    let nbr = 6546546116541 ;
    assert.equal(nbr.msToPretty('ar'), '207 سنوات, 5 أشهر, 1 أسبوع, 4 أيام, 6 ساعات, 31 دقائق, 57 ثواني');
  });


  it('Millisecondes To Date', () => {
    let nbr = 1517415909000  ;
    assert.equal(nbr.msToDate(), '2018-01-31 05:25:09');
  });
  it('Millisecondes To ddd MM/DD/YYYY HH:ss', () => {
    let nbr = 1517415909000  ;
    assert.equal(nbr.msToDate('ddd MM/DD/YYYY HH:ss'), 'Wed 01/31/2018 17:09');
  });
  it('Millisecondes To ddd MM/DD/YYYY HH:ss French', () => {
    let nbr = 1517415909000  ;
    assert.equal(nbr.msToDate('ddd MM/DD/YYYY HH:ss','fr'), 'mer. 01/31/2018 17:09');
  });
});
