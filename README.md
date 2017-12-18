# Dispatch Assignment

### introduction
ViriCiti is getting increasingly more involved with smart charging. Smart charging is about achieving maximal efficiency for  a fleet of vehicles that have limited available charging capacity. For programmers this is highly interesting. In light of these developments we have created a small assignment. This assignment will give you a small insight into what ViriCiti is actually producing and, of course, help us assessing your programming skills. 

### the assigment
Imagine you are developing a smart charging solution for a company's fleet of electric public transport buses. The operator of the fleet lets us know that the route they are going to drive takes 30 minutes (*routeTime*). He or she also tells us that the total amount of time they need buses to be driving on that route is 10 hours per day (*totalTime*). Now, the operator wants to achieve minimally one departure every 15 minutes, that is, a minimum of 4 buses per hour. How many buses does the operator need at minimum?

Now, if only buses had a large battery... then this would be an easy problem to solve. Unfortunately, we need to take into account energy consumed while driving. This means that when a bus it's state of charge (SOC) is below a certain value, there isn't enough capacity to drive the full route. Because of this, an operator needs to deploy extra buses while others are charging.

For simplicity's sake we assume that all these buses are identical. It is known that buses of these manufacturer have a battery that charges with a rate 5.0% SOC per 5 minutes. It is also known that these buses consume approximately 5.8% SOC per 5 minutes with a random deviation between 0 and 1.7. In the example given in this respository we generate deviation like so: ```5.8 + Math.random() * 1.7```.

First hint: Assume that a bus is charging if it is not driving.

Second hint: Possible variables you can use in the process are *routeTime*, *totalTime*, *progress* (amount of minutes a bus has been driving),  *onRoute* (whether a bus is driving or not) and *soc* (current state of charge of a bus).


### how to
We made a repository as a starting point for your assignment. You can choice to use it, but you can, of course, also start with a clean slate.

First, fork the repository at:

```https://github.com/viriciti/dispatch-assignment```

Then open up your terminal and clone the forked repository

Replace [YOUR_USERNAME] with your name

```git clone https://github.com/[YOUR_USERNAME]/assignment.git```

Enter the directory

```cd dispatch-assignment```

Run the project

```npm start```

You should see the following output

```Bus 1211 started the route```


### important points
- Although it is nice if you accomplish to acheive to produce a definite end result, we are more interested in your general approach. This also means that you're javascript does not have to be perfect. 

- Keep things as simple as you possibly can! Only then -- when there is time left -- you can expand and add details.

- We highly value clear code; the easier for us to understand what is going on the better. (e.g. create functions)

- Make sure that you can clarify important decisions and come up with some pros and cons.  

- The initial setup you find here is written in coffeescript. Prefer to write javascript? That's completely fine also.

- If there are any questions, remarks or mistakes in this repository / readme. Please don't hesitate to contact us or just create an issue here.

### possible extras
- Make other parameters variable also. Think about *routeTime*, *totalTime*, 

- Only dispatch the bus with the highest SOC, instead just any bus.

- Instead of adding buses manualy in your code, automise the trail and error process of finding the minimal amount of buses needed to perform the round trips.

- Use the [d3](https://d3js.org/) or [c3](http://c3js.org/) libraries to visualise input and output data. 
