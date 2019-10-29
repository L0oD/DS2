import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";


@Entity({ name: 'tabelapreco' })
export class TabelaprecoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 6, nullable: false })
    codigo: string;
    @Column({ length: 255, nullable: false })
    nome: string;
    @Column({ type: 'double', nullable: true })
    fator: number;
}