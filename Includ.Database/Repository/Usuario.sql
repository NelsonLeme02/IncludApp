SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[Id] [varchar](36) NOT NULL,
	[NomeUsuario] [varchar](70) NOT NULL,
	[CPFUsuario] [varchar](11) NOT NULL,
	[DataNascUsuario] [date] NOT NULL,
	[EmailUsuario] [varchar](100) NOT NULL,
	[TelefoneUsuario] [varchar](20) NOT NULL,
	[EnderecoUsuario] [varchar](100) NOT NULL,
	[CEPUsuario] [varchar](9) NOT NULL,
	[SenhaUsuario] [varchar](100) NOT NULL,
	[IdEspecialista] [varchar](36) NOT NULL,
	[IdPatologia] [varchar](36) NOT NULL,
	[IdTipoAcesso] [varchar](36) NOT NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
ALTER TABLE [dbo].[Usuario] ADD PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Usuario] ADD  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD FOREIGN KEY([IdEspecialista])
REFERENCES [dbo].[Especialista] ([Id])
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD FOREIGN KEY([IdPatologia])
REFERENCES [dbo].[Patologia] ([Id])
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD FOREIGN KEY([IdTipoAcesso])
REFERENCES [dbo].[TipoAcesso] ([Id])

GO
