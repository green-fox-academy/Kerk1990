import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Create a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

fleet.add(new Thing('Get milk'));
fleet.add(new Thing('Remove the obstacles'));
fleet.add(new Thing('Stand up'));
fleet.add(new Thing('Eat lunch'));

fleet.thingCompleted(2);
fleet.thingCompleted(3);

fleet.print();