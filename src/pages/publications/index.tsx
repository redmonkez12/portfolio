import { Timeline, Text } from "@mantine/core";
import { IconBrandMedium } from '@tabler/icons-react';

export default function Publications() {
  return (
    <div className={"py-4"}>
      <Timeline active={6} bulletSize={32} lineWidth={2}>
        <Timeline.Item bullet={<IconBrandMedium size={20}/>} title={"April"} className={"text-3xl"}>
          <div className={"flex flex-col gap-4 text-base mt-4"}>
            <div>
              <a className={"underline"} href="https://medium.com/@tomas.svojanovsky11/javascript-function-basics-42850ee0094a">Javascript: Function Basics</a>
              <Text size="xs" mt={4}>Apr 28</Text>
            </div>

            <div>
              <a className={"underline"} href="https://medium.com/@tomas.svojanovsky11/a-guide-to-the-different-types-of-loops-in-javascript-eab9a55f8a61">A Guide to the Different Types of Loops in JavaScript</a>
              <Text size="xs" mt={4}>Apr 20</Text>
            </div>

            <div>
              <a className={"underline"} href="https://medium.com/@tomas.svojanovsky11/javascript-array-from-a611f95a143c">Javascript: Array.from()</a>
              <Text size="xs" mt={4}>Apr 12</Text>
            </div>

            <div>
              <a className={"underline"} href="https://medium.com/@tomas.svojanovsky11/javascript-types-essentials-a-beginners-guide-2e8380f9ce36">JavaScript Types Essentials: A Beginner’s Guide</a>
              <Text size="xs" mt={4}>Apr 3</Text>
            </div>

            <div>
              <a className={"underline"} href="https://medium.com/@tomas.svojanovsky11/javascript-array-spread-operator-common-operations-b5039141edb6">Javascript array spread operator : Common operations</a>
              <Text size="xs" mt={4}>Apr 1</Text>
            </div>

            <div>
              <a className={"underline"} href="https://medium.com/@tomas.svojanovsky11/a-beginners-guide-to-css-combinators-5485940b731f">A Beginner’s Guide to CSS Combinators
              </a>
              <Text size="xs" mt={4}>Apr 1</Text>
            </div>
          </div>
        </Timeline.Item>

        <Timeline.Item bullet={<IconBrandMedium size={20}/>} title={"March"} className={"text-3xl"}>
          <div className={"flex flex-col gap-4 text-base mt-4"}>
            <div>
              <a className={"underline"} href="https://medium.com/@tomas.svojanovsky11/exploring-javascript-array-methods-for-beginner-programmers-c175eff9fb27">Exploring JavaScript Array Methods for Beginner Programmers</a>
              <Text size="xs" mt={4}>Mar 27</Text>
            </div>

            <div>
              <a className={"underline"} href="https://medium.com/@tomas.svojanovsky11/getting-started-with-python-lists-a-beginners-guide-a59b21b94bd5">Getting Started with Python Lists: A Beginner’s Guide</a>
              <Text size="xs" mt={4}>Mar 25</Text>
            </div>

            <div>
              <a className={"underline"} href="https://medium.com/@tomas.svojanovsky11/fastapi-todo-list-with-authentication-2-f020b337de08">FastAPI todo list with authentication #2</a>
              <Text size="xs" mt={4}>Mar 22</Text>
            </div>

            <div>
              <a className={"underline"} href="https://medium.com/@tomas.svojanovsky11/fastapi-todo-list-with-authentication-1-c3b9c15f9753">FastAPI todo list with authentication #1</a>
              <Text size="xs" mt={4}>Mar 20</Text>
            </div>
          </div>
        </Timeline.Item>

        <Timeline.Item bullet={<IconBrandMedium size={20}/>} title={"February"} className={"text-3xl"}>
          <div className={"mt-4"}>
            <Text size="md" mt={4}>Start</Text>
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}