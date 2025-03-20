package com.carvalho.patinho_feio.infra.enums;

public enum Roles {
    ADMIN, USER;

    public String getRole() {
        return "ROLE_" + this.name();
    }
}
