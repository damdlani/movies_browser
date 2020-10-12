import React from "react";
import Paging from "../../../common/components/Paging";
import { Container } from "../../../common/components/Container/index";
import { Title } from "../../../common/components/Title";

export const MoviesPage = () => (
    <>
        <Title title={"Popular movies"}></Title>

        <Container>
            <p>
                Popular movies page
            </p>
        </Container>

        <Paging />
    </>
);