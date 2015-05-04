describe('DoublyLinkedList', function () {
	
	var list;
	
	beforeEach(function () {
		list = new DoublyLinkedList();
	});
	
	it('should have a first() method', function () {
		
		expect(list.first).toBeDefined();
	});
	
	describe('first()', function () {
		
		it('should move to the first item in the list', function () {
			
		});
	})
	
	it('should have a last() method', function () {
		
		expect(list.last).toBeDefined();
	});
	
	describe('last()', function () {
		
		it('should move to the last item in the list', function () {
			
		});
	})
	
	it('should have a next() method', function () {
		expect(list.next).toBeDefined();
	});
	
	describe('next()', function () {
		
		it('should move to the next item in the list', function () {
			
		});
	});
	
	it('should have a previous() method', function () {
		expect(list.previous).toBeDefined();
	});
	
	describe('previous()', function () {
		
		it('should move to the previous item in the list', function () {
			
		});
	});
	
	it('should have a get() method', function () {
		expect(list.get).toBeDefined();
	});
	
	describe('get()', function () {
		
	});
	
	it('should have a pop() method', function () {
		expect(list.pop).toBeDefined();
	});
	
	describe('pop()', function () {
		
		it('should remove and return the current item in the list', function () {
			
		});
	});
	
	it('should have an insert() method', function () {
		expect(list.insert).toBeDefined();
	});
	
	describe('insert()', function () {
		
		it('should insert an item at a specific index in the list', function () {
			
		});
	});
	
	it('should have an append() method', function () {
		expect(list.append).toBeDefined();
	});
	
	describe('append()', function () {
		
		it('should append an item to the end of the list', function () {
			
		});
	});
	
})