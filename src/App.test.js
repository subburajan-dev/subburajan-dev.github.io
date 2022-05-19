import { render,screen } from "@testing-library/react";
import AppRoute from "Routes/PublicRoute";
test("render app title element",()=>{
    render(<AppRoute/>);
    const titleElement = screen.getByText(/home/i);
    expect(titleElement).toBeInTheDocument();
})