import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";


@Entity({ name: 'produto' })
export class ProdutoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 6, nullable: false })
    codigo: string;
    @Column({ length: 50, nullable: false })
    nome: string;
    @Column({ length: 255, nullable: false })
    descricao: string;
    @Column({ type: 'double', nullable: true })
    preco: number;
}