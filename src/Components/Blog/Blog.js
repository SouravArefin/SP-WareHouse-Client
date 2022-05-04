import React from 'react';
import image from '../../person 1.png'
import image2 from '../../person 2.png'
import image3 from '../../person 3.png'
import image4 from '../../person-4.jpg'
const Blog = () => {
    return (
        <div style={{ margin: "20%" }} >
            <div className="custom-shadow ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={image} alt='' />
                    <div >
                        <h1 >Will Smith</h1>
                        <h1 >Posted On 20th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style text-red-700 text-center text-3xl"> Difference between Javascript and Nodejs </h1>
                    <h1 className="sp-style p-5 text-2xl"> JavaScript is a programming language used to write scripts on a website. NodeJS on the other hand is a JavaScript runtime environment.</h1>
                    <h1 className="sp-style p-5 text-2xl">  JavaScript can only be run in the browser. We can use it to run JavaScript outside of the browser with Node JS.</h1>
                    <h1 className="sp-style p-5 text-2xl">  JavaScript is used for client-side and frontend development.while NodeJS is mostly used for server-side and server-side development.</h1>
                    <h1 className="sp-style p-5 text-2xl">   JavaScript is capable enough to add HTML and play with DOM. Nodejs, on the other hand, cannot add HTML tags.</h1>
                    <h1 className="sp-style p-5 text-2xl"> JavaScript can run on any browser engine, such as JS Core in Safari and SpiderMonkey in Firefox. V8 is the JavaScript engine inside node.js that parses and runs JavaScript.</h1>
                    <h1 className="sp-style p-5 text-2xl"> JavaScript can run on any browser engine, such as JS Core in Safari and SpiderMonkey in Firefox. V8 is the JavaScript engine inside node.js that parses and runs JavaScript.</h1>


                </div>

            </div>

            <div className="custom-shadow ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={image2} alt='' />
                    <div >
                        <h1 >Chris Hemsworth.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-3xl text-red-700">When should you use Node.js and when should you use MongoDB?</h1>
                    <p className="sp-style p-10 text-2xl">
                        Any project requires a programming environment and a runtime library that provides you with basic programming tools / support and can compile or interpret your code.  Nodejs is an example tool for JavaScript programming languages.
                        There are other similar tools for other languages ​​like Python, Java, PHP, C #, C ++, Go, etc.
                        So, if you want to write any kind of standalone program or server in JavaScript, you can use nodes for it.
                        If your application needs the ability to constantly store data so that you can search efficiently or update it, you will usually use some form of a database.
                        There are dozens of popular databases.<br/> MongoDB is such a database. (MariaDB, MySql, CouchDB, DynamoDB (in AWS), and Postgres) are examples of other databases.
                        Different databases have different strengths (the things they are the best) and different ways to use them so choosing the right / best database for what you are doing is entirely up to your decision.
                    </p>

                </div>

            </div>
            <div className="custom-shadow ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={image3} alt='' />
                    <div >
                        <h1 >Leonardo DiCaprio.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-3xl text-red-700">Difference Between Sql and Nosql databases.</h1>
                  
                    <h1 className="sp-style p-5 text-2xl">SQL databases are related, and NoSQL databases are unrelated.</h1>
                    <h1 className="sp-style p-5 text-2xl"> SQL Database uses structured query language and has a default schema.The NoSQL database contains dynamic schemas for unorganized data.</h1>
                    <h1 className="sp-style p-5 text-2xl">SQL databases based on are vertically scalable, while NoSQL databases based on are horizontally scalable.</h1>
                    <h1 className="sp-style p-5 text-2xl">SQL databases are table-based, while NoSQL databases store documents, key values, graphs, or wide columns.</h1>
                    <h1 className="sp-style p-5 text-2xl">SQL databases are good for multi-row transactions, while NoSQL is good for unstructured data like documents or JSON.</h1>
                  
                </div>

            </div>
            <div className="custom-shadow ">

<div className="flex items-center mt-10 p-5">
    <img className='w-10 h-10 rounded-full mr-3' src={image4} alt='' />
    <div >
        <h1 >Lucas Hemsworth.</h1>
        <h1 >Posted On 10th August,2021</h1>
    </div>

</div>
<div>
    <h1 className="sp-style font-bold text-center text-3xl text-red-700">What is the purpose of Jwt and how does it work?</h1>
    <p className="sp-style p-10 text-2xl">
    JWT (JSON Web Token) is an open value that is used to share security information between two parties - a client and a server. 
Each JWT contains an encoded JSON object, which contains a set of claims. 
JWTs are signed using a cryptographic algorithm to ensure that claims cannot be changed after the token is issued.

Unlike all other web tokens, JWT contains a set of claims. 
Used to transmit information between two parties to a claim. 
This claim depends on the use of the hand. For example, a claimant may claim who gave the token, how long it may be valid, or what permission has been granted to the client.
    </p>

</div>

</div>
        </div>
    );
};

export default Blog;