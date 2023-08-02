const { register, login }  = require('../../controllers/authController');
const User = require('../../models/User');
const sequelize = require('../../services/database');



beforeAll(async () => { 
    return await sequelize.sync({force: true});
})


test('When creating a user, it should return status code of 400 if user already exists', async() => { 
    const request = {
        body: { 
            name: 'someone',
            email: 'someemail@gmail.com',
            password: 'somepassword',
        },
    };

    const response = { 
        status: jest.fn((x) => x),
        send: jest.fn((x) => x)
    }

    await register(request, response);
    await register(request, response);
    expect(response.status).toHaveBeenCalledWith(400);
});

test('When creating a user, it should return status code of 201 if the user is new', async() => { 
    const request = {
        body: { 
            name: 'second_one',
            email: 'anotherguy@gmail.com',
            password: 'somepassword',
        },
    };

    const response = { 
        status: jest.fn((x) => x),
        send: jest.fn((x) => x)
    }

    await register(request, response);
    expect(response.status).toHaveBeenCalledWith(201);
});

test('When creating a user, it should return status code of 500 if it has no email', async() => { 
    const request = {
        body: { 
            name: 'second_one',
            password: 'somepassword',
        },
    };

    const response = { 
        status: jest.fn((x) => x),
        send: jest.fn((x) => x)
    }

    await register(request, response);
    expect(response.status).toHaveBeenCalledWith(500);
});

test('When creating a user, it should return status code of 500 if it has no password', async() => { 
    const request = {
        body: { 
            name: 'second_one',
            email: 'someemailand@emai.com',
        },
    };

    const response = { 
        status: jest.fn((x) => x),
        send: jest.fn((x) => x)
    }

    await register(request, response);
    expect(response.status).toHaveBeenCalledWith(500);
});


test('When loggin in with valid email and password, should return status code 201.', async() => { 
    const request = {
        body: { 
            email: 'anotherguy@gmail.com',
            password: 'somepassword',
        },
    };

    const response = { 
        status: jest.fn((x) => x),
        send: jest.fn((x) => x)
    }

    await login(request, response);
    expect(response.status).toHaveBeenCalledWith(201);
})