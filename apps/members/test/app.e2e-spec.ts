import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import type { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { MembersModule } from "../src/application/members.module";

describe("MembersController (e2e)", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [MembersModule]
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it("/ (GET)", () => {
        return request(app.getHttpServer())
            .get("/")
            .expect(200)
            .expect("Hello World!");
    });
});
