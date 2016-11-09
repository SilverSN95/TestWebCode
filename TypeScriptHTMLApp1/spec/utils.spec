describe('Utils', function ($q, Utils) {

	//make app available for each test
	beforeEach(angular.mock.module('app'));
	
	it('Should define methods', inject(function(Utils) {
		expect(Utils.mapIconTextToURL).toBeDefined();
	}));
	
	describe('mapIconTextToURL', function () {
		it('Should return the corresponding icon URL from the icon map for a given icon text', inject(function(Utils) {
			expect(Utils.mapIconTextToURL('cloudy')).toBe('http://icons.wxug.com/i/c/k/cloudy.gif');
			expect(Utils.mapIconTextToURL('snow')).toBe('http://icons.wxug.com/i/c/k/snow.gif');
		}));
	});
		
});