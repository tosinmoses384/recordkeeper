import { render, screen } from "@testing-library/react";

// import Home from "@/pages/index";
// import TeacherAndStudent from "@/components/teacherAndStudent/TeacherAndStudent";
import {Main} from '@/components/common/Main';

test("page has correct heading", () => {
  render(<Main />);

  const heading = screen.getByRole("div", {
    name: "Users",
  });
  expect(heading).toBeInTheDocument();

  
});
