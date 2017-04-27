retail
    .factory('Employee', function($resource) {
        return $resource(
            'http://127.0.0.1:8000/employees/:id/',
            {},
            {
                'query': {
                    method: 'GET',
                    isArray: true,
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            },
            {
                stripTrailingSlashes: false
            }
        );
    });
