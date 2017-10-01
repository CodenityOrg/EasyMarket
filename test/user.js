'use strict'

const User = require('../models/user.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');
const should = chai.should();
const fs = require('fs'); 

chai.use(chaiHttp);

describe('User',()=>{
    
   before((done)=>{
        done();
    })

   beforeEach((done)=>{
        User.remove({},(err)=>{
            done();
        })
    })

    describe(' ',()=>{
        it("it should CREATE new user", (done)=>{
            const user =  {
                name :'user',
                lastname:'1',
                email:'user1@gmail.com',
                password:'123456',
                facebookId:'1234',
                city:'city1',
                cellphone:'11111111'
            };

            chai.request(server)
                .post('/users')
                .send(user)
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('lastname');
                    done();
                });
        });
        it("it should LOGIN with a existing user",(done)=>{
            const user = new User({
                name :'user',
                lastname:'1',
                email:'user1@gmail.com',
                password:'123456',
                facebookId:'1234',
                city:'city1',
                cellphone:'11111111'
            });

            user.save((err)=>{
                
                let data = {
                    email: 'user1@gmail.com',
                    password: '123456'
                };
            
                chai.request(server)
                .post('/login')
                .send(data)
                .end((err,res)=>{
                    res.should.have.status(200)
                    res.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('lastname');  
                    done();
                })
            })

        })
     
    })
    
})