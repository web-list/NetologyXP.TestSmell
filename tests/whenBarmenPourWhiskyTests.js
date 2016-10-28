import assert from 'assert'
import {pour, free as freeBarmen} from '../src/barmen'
import {drink, sober, goToBar, getMyCar, getTotallyDrunked, isDrunked} from '../src/me'
import {download} from '../src/imageDownloader'
import fs from 'fs'
import {expect} from 'chai'
import username from 'username'


suite('when barmen pour whisky', function () {
    let whisky;
    setup(function (done) {
        this.timeout(20000);
        sober();
        download('http://www.rosa-obs.com/images/ccd/M31_karel_full.jpg', 'mycar.jpg', function () {
            let car = getMyCar("mycar.jpg");
            goToBar(car);
            freeBarmen();
            done();
        });
        fs.readFile('whisky.jpg', function (err, whiskyFile) {
            if (err) {
                throw err;
            }
            whisky = whiskyFile;
        });
        done();
    });

    suite('i ask 50 grams', function () {
        test('I get and drink whisky', function (done) {
            let iAskVolume = 50;
            let volumeInGlass = pour(whisky, iAskVolume);
            drink(volumeInGlass);
            assert.equal(iAskVolume, volumeInGlass);
            assert.equal(false, isDrunked());
            assert.equal(50, getTotallyDrunked());
            done();
        });
    });

    suite('i ask -10 grams', function () {
        test('I get an error', function (done) {
            let iAskVolume = -10;
            expect(() => pour(whisky, iAskVolume)).to.throw(/Invalid volume of whisky/);
            done();
        });
    });

    // suite('i ask 500 grams', function() {
    //     test('Barmen said there is no such glass', function(done) {
    //
    //         username().then(un => {
    //             console.log(un);
    //             if (un === "alex4Zero") {
    //             }
    //             var iAskVolume = 500;
    //             var whisky = 1;
    //
    //             expect(() => pour(whisky, iAskVolume)).to.throw(/There is no such glass/);
    //             done();
    //         });
    //     })
    // });

    teardown(function () {
    })
});