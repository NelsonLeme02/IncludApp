create table Usuario(
    Id varchar(36) primary key default newid() not null,
    Nome varchar(100) not null,
    Email varchar(100) not null,
    Senha varchar(36) not null,
    Cep varchar(9),
    Telefone varchar(17),
    IdTipoAcesso varchar(36)
    constraint fkIdTipoAcesso foreign key(IdTipoAcesso) references dbo.TipoAcesso(Id)
)
