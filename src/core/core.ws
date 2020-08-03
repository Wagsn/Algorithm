// 语法规则

参考 
表示法 https://www.crockford.com/mckeeman.html
抽象语法树解析 https://astexplorer.net/

// 词法分析
// 标识符 <ID>
[a-zA-Z][a-zA-Z\d]*
// 字面量 Literal 整数Integer 小数Float 字符串String
LIT
    INT
    FLO
    STR
<Integer>    100       \d|[1-9]\d*|((?!<ID>\s*)-\d|[1-9]\d*)
<Float>      3.14      \d\.\d+|((?!<ID>\s*)-\d\.\d+)
<String>     'word'    '([^']|\\')*'

// 语法分析

// 表达式
Expression
// 成员表达式
MemberExpression {object, property}
    // a.b
    Identifier '.' Identifier
    // 0 .b
    Literal '.' Identifier
    // a[0] a[b()] a[b+c] a[b=2] a[b.c]
    Identifier '[' Expression ']'
// 赋值表达式
AssignmentExpression {left, operator, right}
    // a = 0
    Identifier '=' Literal
    // a = b 
    Identifier '=' Identifier
    // a.b = c

https://help.eclipse.org/2020-06/index.jsp?topic=%2Forg.eclipse.jdt.doc.isv%2Freference%2Fapi%2Forg%2Feclipse%2Fjdt%2Fcore%2Fdom%2FAST.html
ASTNode
    subs: AnonymousClassDeclaration, BodyDeclaration, CatchClause, Comment, CompilationUnit, Dimension, ImportDeclaration, MemberRef, MemberValuePair, MethodRef, MethodRefParameter, Modifier, ModuleDeclaration, ModuleDirective, ModuleModifier, PackageDeclaration, , TagElement, TextElement, Type, TypeParameter, 
    Statement
        subs: AssertStatement, Block, BreakStatement, ConstructorInvocation, ContinueStatement, DoStatement, EmptyStatement, EnhancedForStatement, , ForStatement, IfStatement, LabeledStatement, ReturnStatement, SuperConstructorInvocation, SwitchCase, SwitchStatement, SynchronizedStatement, ThrowStatement, TryStatement, TypeDeclarationStatement, VariableDeclarationStatement, WhileStatement, YieldStatement
        ExpressionStatement: {Expression}
            StatementExpression ;
        Block: {Statements: List<Statement>}
            { { Statement } }
        ReturnStatement:
            return [ Expression ] ;
    Expression
        subs: Annotation, ArrayAccess, ArrayCreation, ArrayInitializer, , BooleanLiteral, CastExpression, CharacterLiteral, ClassInstanceCreation, ConditionalExpression, FieldAccess, InfixExpression, InstanceofExpression, LambdaExpression, MethodInvocation, MethodReference, Name, NullLiteral, NumberLiteral, ParenthesizedExpression, PostfixExpression, PrefixExpression, StringLiteral, SuperFieldAccess, SuperMethodInvocation, SwitchExpression, TextBlock, ThisExpression, TypeLiteral, VariableDeclarationExpression
        // 字面量表达式
        BooleanLiteral: {Value}
            true
            false
        CharacterLiteral: {Value}
        StringLiteral: {Value}
        NullLiteral: 
        NumberLiteral: {Token: string}
        TypeLiteral: {Type: type}
            ( Type | void ) . class
        // 
        LambdaExpression:
            Identifier -> Body
            ( [ Identifier { , Identifier } ] ) -> Body
            ( [ FormalParameter { , FormalParameter } ] ) -> Body
        MethodInvocation: 方法调用表达式
            [ Expression . ]
                [ < Type { , Type } > ]
                Identifier ( [ Expression { , Expression } ] )
        Assignment: {LeftSide: Expression, Operator, RightSide: Expression} 赋值表达式
            Expression AssignmentOperator Expression
        // 前中后缀表达式
        PrefixExpression: {Operand, Operator}
            PrefixOperator Expression
        InfixExpression: {LeftOperand: Expression, Operator, RightOperand: Expression}
            Expression InfixOperator Expression { InfixOperator Expression }
        PostfixExpression: {Operand, Operator}
            Expression PostfixOperator
            
    VariableDeclaration
// 语句 A Statement is the basis for all execution by a Mapping.  Mapping : ::Mapping[?]
Statement
    
Specifiers
    ImportSpecifier
    ImportSpecifier ',' Specifiers
ImportDeclaration
    import '{' Specifiers '}' from String
ExpressionStatement : Statement
    MemberExpression
// Block { Statements } extends Statement
Block : Statement
    ImportDeclaration


// 程序 {body: Block}

